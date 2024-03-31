import React, { useContext, useEffect, useState } from 'react'
import { contextA } from '../App';
import axios from 'axios';


function Form() {

    

    const {state,dispatch}=useContext(contextA);


    const [id,setId]=useState(state.list.length)
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [website,setWebsite]=useState('');
    const [city,setCity]=useState('');
    const [company,setCompany]=useState('');
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


e.target.elements[0].value=''
e.target.elements[1].value=''
e.target.elements[2].value=''
e.target.elements[3].value=''
e.target.elements[4].value=''
e.target.elements[5].value=''


    
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

return (
    <div className="col-12  ">
    <form className='mt-5 d-grid justify-content-center gap-2'  onSubmit={handleSubmit}>

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
        <button type="submit" className='form-control'>Submit</button>

    </form>
    </div>
)
}

export default Form;