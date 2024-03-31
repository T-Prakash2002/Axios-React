
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

        case('DELETE-DATA'):
            return{
                ...state,
                list:state.list.filter(item=>item.name !== action.payload)
            }
        case('UPDATE-DATA'):  

            //console.log(action.payload)
            let lo=state.list.filter(item=>item.username !== action.payload.username)

    //         const a={
    //                 ...updatelist,
    //                 "id": action.payload.id,
    //                 "name": action.payload.name,
    //                 
    //                 "email": action.payload.email,
    //                 "address": {
    //                     
    //                     "city": action.payload.address.city,
    //                     
    //                 },
    //                 "phone":action.payload.phone,
    //                 "website":action.payload.website,
    //                 "company": {
    //                     "name": action.payload.company.name,
    //                     
    //                 }
    // 
    //         }

            

            return{
                list:[
                    ...lo,
                    {
                        ...action.payload
                    }
                ]
            }
           // console.log(updatelist)



    }
}


//export{ initial,reducer};