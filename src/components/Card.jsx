import React, { useContext, useEffect, useState } from 'react'
import { contextA } from '../App';
import axios from 'axios';

function Card({data,EditTask}) {

    const {state,dispatch}=useContext(contextA);

const deleteTask=(name)=>{
    dispatch({
        type:"DELETE-DATA",
        payload:name
    })


    axios.delete(`https://jsonplaceholder.typicode.com/users/${name}`)
    alert(`deleted Details`)
}



return (
    <div className='col-12 col-sm-6 col-lg-4 col-xl-3 gap-5'>
    <div className="card p-3 mb-5">
        <h3 className="card-header bg-warning">{data.name}</h3>


<div className="card-body bg-warning-subtle p-3">
    
    <p className="card-text">
        <strong>Phone:</strong>
        {data.phone}
    </p>

    <p className="card-text">
        <strong>Email:</strong>
        {
            data.email
        }
    </p>
    <p className="card-text">
        <strong>Website:</strong>
        {
            data.website
        }
    </p>

    <p className="card-text">
        <strong>City:</strong>
        {data.address.city},

    </p>

    <p className="card-text">
        <strong>Company Name:</strong>{
            data.company.name
        }
    </p>



</div>
    <div className="card-footer d-flex justify-content-between bg-warning">
        
        <button className="btn btn-outline-secondary" onClick={(e)=>EditTask(data.name)}>Edit</button>

        <button className="btn btn-outline-dark" onClick={(e)=>{deleteTask(data.name)}}>Delete</button>

    </div>

</div>
</div>
)
}

export default Card