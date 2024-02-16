import React from 'react'
import { useState , useEffect} from 'react';

const Time = () => {
    const[hour,setHour]=useState(new Date().getHours());
    const[min,setMin]=useState(new Date().getMinutes());
    const[sec,setSec]=useState(new Date().getMinutes());


    useEffect(
      ()=>{
        console.log("hello")
        setTimeout(() => {
            
          if(hour>12){
            setHour(new Date().getHours()-12);

          }
          setMin(new Date().getMinutes());
          setSec(new Date().getSeconds());
        }, 1000);
      }
    );

    return <div className='timmer'>
        Time - {hour>9?"":0}{hour}:{min>9?"":0}{min}:{sec>9?"":0}{sec} {new Date().getHours()>12? "PM" : "AM"}
    </div>;
}

export default Time