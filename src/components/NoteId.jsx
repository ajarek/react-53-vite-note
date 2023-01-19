import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const NoteId = () => {
  return (
    <div className='note-id'>
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
  )
}

export default NoteId
