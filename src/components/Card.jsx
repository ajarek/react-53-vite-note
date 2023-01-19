import React from 'react'

const Card = (props) => {
const { id, title, text, date, newClass, styles,displayNoteId }= props
  return (
    
      <div
        id={id}
        className={newClass}
        style={styles}
        onClick={displayNoteId}
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
