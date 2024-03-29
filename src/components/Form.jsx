import React, { useState } from 'react'

function Form() {

    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [website,setWebsite]=useState('');
    const [city,setCity]=useState('');
    const [company,setCompany]=useState('');



function handleSubmit(){

    


}

return (
    <div className="col-12  ">
    <form className='mt-5 d-grid justify-content-center gap-2' onSubmit={()=>{handleSubmit}}>

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

export default Form