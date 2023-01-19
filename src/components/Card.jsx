import React from 'react'

const Card = ({ id, title, text, date, newClass, styles }) => {
  return (
    
      <div
        id={id}
        className={newClass}
        style={styles}
      >
        <div className='title'>{title}</div>
        <div className='text'>
          <p>{text}</p>
        </div>
        <div className='date'>{date}</div>
      </div>
    
  )
}

export default Card
