
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

        //console.log(state.list);
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        ...action.payload
                    }
                ]
            }
    }
}


//export{ initial,reducer};