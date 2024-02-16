import React from 'react'
import { useState , useEffect} from 'react';

const Timer = () => {
    const[count,setCount]=useState(0);
    if(count===101){
      setCount(0);
    }
    useEffect(
      ()=>{
        setTimeout(() => {
          setCount(count+1);
        }, 1000);
      }
    );
  
    return <div className='timmer'>{console.log(count)}I've rendered {count} times!</div>;
}

export default Timer
