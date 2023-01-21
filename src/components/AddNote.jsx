import React from 'react'
import Form from '../components/Form'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { v1 as uuidv1 } from 'uuid';
const AddNote = () => {
   const currentDate = new Date()
  const handleSubmit=(data)=>{
    const newNote={
      id:uuidv1(),
      title: data.title,
      text: data.text,
      date:currentDate.toLocaleString('pl-PL', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    })
    }
    var notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  return (
    <div className='add-note'>
      <div className='notes-header'>
        <Link
          to={'/'}
          className='icon-wrapper'
        >
          <IoIosArrowBack />
        </Link>
       
      </div>
      <Form
      onSubmit={handleSubmit}
      label={'Submit note'}
      />
    </div>
  )
}

export default AddNote
