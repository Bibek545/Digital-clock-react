import React from 'react'
import { useState, useEffect } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
       const intervalId = setInterval(()=> {
             setTime(new Date());
       }, 1000);

       return () => {
        clearInterval(intervalId);
       }
    }, []);
    
    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`;
    }

    const padZero = (number) => {
         return (number < 10 ? "0" : "") + number;
    }
  return (
    <div className='clock-container'>
      <div className='clock'>
        <span><h1>{formatTime()}</h1></span>
        </div>  
      
    </div>
  )
}

export default DigitalClock;
