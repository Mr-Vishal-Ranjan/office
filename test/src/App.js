import React from 'react'
// import './App.css';
import Blu from './components/ChangeColor';
import Timer from './components/Timer';
import Props from './components/Props';
import UseContext from './components/UseContext';

export default function App(){

  return (
    <div className='mainDiv'>
      {/* <Blu/> */}
      {/* <Props name="Vishal " age="20"/> */}
      {/* <Props/> */}
      <UseContext/>
    </div>
  )
}
