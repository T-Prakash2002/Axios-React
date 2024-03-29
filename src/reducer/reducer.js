
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
    }
}


//export{ initial,reducer};