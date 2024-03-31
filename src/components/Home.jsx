import React, { useContext, useState } from 'react'
import { contextA } from '../App';
import Nav from './Nav';
import Card from './Card';
import Form from './Form';

function Home() {

const {state,dispatch}=useContext(contextA);

const [isEditing, setIsEditing] = useState(false);

    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [website,setWebsite]=useState('');
    const [city,setCity]=useState('');
    const [company,setCompany]=useState('');

const [userName,setUserName]=useState('');

const EditTask=(name)=>{

    setIsEditing(true);

    let newEditedlist=state.list.find(item=>item.name===name);

    setUserName(newEditedlist.username);
    setCity(newEditedlist.address.city);
    setCompany(newEditedlist.company.name)
    setEmail(newEditedlist.email)
    setName(newEditedlist.name)
    setPhone(newEditedlist.phone)
    setWebsite(newEditedlist.website)
}


return (
    <div className='container-fluid border'>

        <div className="row">
            <Nav />
        </div>
        <div className="row">
            <Form 
            name={name}setName={setName}
            userName={userName}
            phone={phone}setPhone={setPhone}
            email={email}setEmail={setEmail}
            website={website}setWebsite={setWebsite}
            city={city}setCity={setCity}
            company={company}setCompany={setCompany}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            />
        </div>
        
        <div className="row m-3">
            {
                state.list.map(li=>{
                    return<Card key={li.id} data={li} EditTask={EditTask}/>
                })
            }

        </div> 
    </div>
)
}

export default Home