import React, { createContext, useEffect, useReducer } from 'react'
import { initial,reducer } from './reducer/reducer';
import Home from './components/Home';
import axios from 'axios';
import './App.css'



export const contextA=createContext();

function App() {

const [state,dispatch]=useReducer(reducer,initial);


useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{


      //console.log(response)
      dispatch({type:'GET_DATA',payload:{list:response.data}});
    })



},[])

  return (
    <contextA.Provider value={{state,dispatch}}>

      <Home />

    </contextA.Provider>
  )
}

export default App