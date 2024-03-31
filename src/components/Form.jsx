import React, { useContext, useEffect, useState } from 'react'
import { contextA } from '../App';
import axios from 'axios';


function Form({isEditing,
                name,setName,
                userName,
                phone,setPhone,
                email,setEmail,
                website,setWebsite,
                city,setCity,
                company,setCompany,
                setIsEditing
                }){


    const {state,dispatch}=useContext(contextA);

    
    const [id,setId]=useState(state.list.length)

useEffect(()=>{
    setId(state.list.length);
},[])



async function handleSubmit(e){

    e.preventDefault();

    setId((preId)=>preId+1);

    const item={
        "id": id,
        "name": name,
        "username":"",
        "email": email,
        "address": {
            "street": "",
            "suite": "",
            "city": city,
            "zipcode": "",
            "geo": {
                "lat": "",
                "lng": ""
            }
        },
        "phone":phone,
        "website":website,
        "company": {
            "name": company,
            "catchPhrase": "",
            "bs": ""
        }
    }


setCity('');
setCompany('')
setEmail('')
setName('')
setPhone('')
setWebsite('')


dispatch({
    type:'ADD_DATA',
    payload:item

    

});

    let createlist=await axios.post(`https://jsonplaceholder.typicode.com/users`,{li:item})
    .then((Response)=>alert(` List Successfully Created`))
    .catch((error)=>{
        console.log("Error:\n"+error);
    })


}

async function update(e){
    
    e.preventDefault();

    const selected_item=state.list.filter(i=>i.username===userName)


        const item={
        "id": selected_item[0].id,
        "name": name,
        "username":selected_item[0].username,
        "email": email,
        "address": {
            "street": selected_item[0].address.street,
            "suite": selected_item[0].address.suite,
            "city": city,
            "zipcode":selected_item[0].address.zipcode ,
            "geo": {
                "lat": selected_item[0].address.geo.lat,
                "lng": selected_item[0].address.geo.lng,
            }
        },
        "phone":phone,
        "website":website,
        "company": {
            "name": company,
            "catchPhrase": selected_item[0].company.catchPhrase,
            "bs": selected_item[0].company.bs
        }
    }

    dispatch({
        type:'UPDATE-DATA',
        payload:item

    })
    setIsEditing(false);




}


return (
    <div className="col-12  ">
    <form className='mt-5 d-grid justify-content-center gap-2'>

        <input 
        type="text" 
        className='form-control ' 
        placeholder='Enter Name' 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />

        <input
        type="text" 
        className='form-control' 
        placeholder='Enter Phone Number' 
        value={phone}
        onChange={(e)=>{setPhone(e.target.value)}}
        />

        <input 
        type="email" 
        className='form-control' 
        placeholder='Enter Email' 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />

        <input 
        type="text" 
        className='form-control' 
        placeholder='Enter Website' 
        value={website}
        onChange={(e)=>{setWebsite(e.target.value)}}
        />

        <input 
        type="text" 
        className='form-control' 
        placeholder='Enter City' 
        value={city}
        onChange={(e)=>{setCity(e.target.value)}}
        />
        
        <input 
        type="text" 
        className='form-control' 
        placeholder='Enter Company Name' 
        value={company}
        onChange={(e)=>{setCompany(e.target.value)}}
        />
        <br />

        <button type="submit" className='form-control'
        onClick={isEditing?update:handleSubmit}
        >
            {isEditing ? 'Update Details' : 'Add Details'}
            
            </button>

    </form>
    </div>
)
}

export default Form;