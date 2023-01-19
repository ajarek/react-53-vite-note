import React, { useState, useEffect } from 'react'

const Time = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
         setInterval(() => setDateState(new Date()), 1000);
  }, []);
  
 
  
  return (
    <div>  {dateState.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
  })}</div>
  )
}

export default Time