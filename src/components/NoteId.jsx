import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../App'
import { IoIosArrowBack } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
const NoteId = () => {
  const { id } = useParams()
  const { notes, setNotes } = useContext(AppContext)

  const currentNote = notes?.find((note) => note.id == id)
  const objOfNotes = { ...currentNote }

  return (
    <div className='note-id'>
      <div className='notes-header'>
        <Link
          to={'/'}
          className='icon-wrapper'
        >
          <IoIosArrowBack />
        </Link>
        <Link className='icon-wrapper'>
          <FiEdit />
        </Link>
      </div>
      <div className='noteId-wrapper'>
        <div
          className='title'
          style={{ marginBottom: '1rem' }}
        >
          {objOfNotes.title}{' '}
        </div>
        <div
          className='date'
          style={{ marginBottom: '1rem' }}
        >
          {objOfNotes.date}
        </div>
        <div className='text'>{objOfNotes.text}</div>
      </div>
    </div>
  )
}

export default NoteId
