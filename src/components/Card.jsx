import React from 'react'

function Card({data}) {




return (
    <div className='col-12 col-sm-6 col-lg-4 col-xl-3 gap-5'>
    <div className="card p-3 mb-5">
        <h3 className="card-header bg-warning">{data.name}</h3>


<div className="card-body bg-warning-subtle p-3">
    

    <h6 className="card-subtitle mb-2 text-body-secondary">
        <strong>User Name:</strong>
        {data.username}
    </h6>

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
        <strong>Phone:</strong>
        {data.phone}
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
        
        <button className="btn btn-outline-success">Edit</button>

        <button className="btn btn-outline-danger">Delete</button>

    </div>

</div>
</div>
)
}

export default Card