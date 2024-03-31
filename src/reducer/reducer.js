
export const initial={
    list:[
        
    ]
}

export const reducer=(state,action)=>{
    switch(action.type){
        case('GET_DATA'):
            return{
                list:action.payload.list
            }
        case('ADD_DATA'):
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        ...action.payload
                    }
                ]
            }

        case('DELETE-DATA'):
            return{
                ...state,
                list:state.list.filter(item=>item.name !== action.payload)
            }
        case('UPDATE-DATA'):  

            let lo=state.list.filter(item=>item.username !== action.payload.username)

            

            return{
                list:[
                    ...lo,
                    {
                        ...action.payload
                    }
                ]
            }




    }
}

