import React, { useContext } from 'react'
import { contextA } from '../App';
import Nav from './Nav';
import Card from './Card';
import Form from './Form';

function Home() {

const {state,dispatch}=useContext(contextA)


//console.log('hii  ',state);
return (
    <div className='container-fluid border'>

        <div className="row">
            <Nav />
        </div>
        <div className="row">
            <Form />
        </div>
        
        <div className="row m-3">
            {
                state.list.map(li=>{
                    return<Card key={li.id} data={li}/>
                })
            }

        </div> 
    </div>
)
}

export default Home