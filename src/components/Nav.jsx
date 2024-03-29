import React, { useContext } from 'react'
import { contextA } from '../App'

function Nav() {

    const {state,dispatch}=useContext(contextA);



return (
    <>
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
    </div>
</nav>
    </>
)
}

export default Nav