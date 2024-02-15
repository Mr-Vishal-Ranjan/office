import React from 'react'
import { useState } from 'react';
import Timer from './Timer';

const Blu = () => {
    const[cl,setColor] = useState("blue")
  
  
    let handle=()=>{
      if(cl==="blue"){
        setColor("black");
      }else {
        setColor("blue");
      }
      
    }
  
    return(
      <div className='color' style={{backgroundColor:cl}}>
        <div>
        <button className='btn' onClick={handle}>
           Clicked to change color
           {console.log(cl)}
         </button>
        </div>
        <Timer/>
      </div>
    );
}

export default Blu
  