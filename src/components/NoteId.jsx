import React, { useContext } from 'react'
import { AppContext } from '../App'
import { IoIosArrowBack } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link, useParams, useNavigate } from 'react-router-dom'
const NoteId = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { notes, setValueText, setValueTitle } = useContext(AppContext)
  const currentNote = notes?.find((note) => note.id == id)
  const objOfNotes = { ...currentNote }

  const editNote = () => {
    navigate('/add-note')
    setValueText(objOfNotes.text)
    setValueTitle(objOfNotes.title)
    const newNotes = notes.filter((note) => note.id != id)
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }
  const deleteNote = () => {
    const newNotes = notes.filter((note) => note.id != id)
    localStorage.setItem('notes', JSON.stringify(newNotes))
    navigate('/')
  }

  return (
    <div className='note-id'>
      <div className='notes-header'>
        <Link
          to={'/'}
          className='icon-wrapper'
        >
          <IoIosArrowBack />
        </Link>
        <div className='wrapper-div'>
          <div
            onClick={editNote}
            className='icon-wrapper'
          >
            <FiEdit />
          </div>
          <div
            onClick={deleteNote}
            className='icon-wrapper'
          >
            <RiDeleteBin6Line />
          </div>
        </div>
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
