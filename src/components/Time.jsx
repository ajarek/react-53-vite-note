import React, { useState, useEffect } from 'react'

const Time = () => {
  const [time, setTime]=useState()
  const date=new Date()
  const currentTime = date.toLocaleTimeString()
  useEffect(() => {
     setInterval(() => {
      setTime(currentTime)
    }, 1000);
   
  }, []);
  console.log(currentTime);
  return (
    <div>{time}</div>
  )
}

export default Time