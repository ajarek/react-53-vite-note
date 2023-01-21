import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../App'
import { GoSearch, GoPlus } from 'react-icons/go'
import { useNavigate, Link } from 'react-router-dom'
import Card from './Card'

const Notes = () => {
  const { notes, setNotes } = useContext(AppContext)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const getData = async () => {
      var notes = await JSON.parse(localStorage.getItem('notes') || '[]')
      setNotes(notes)
    }
    getData()
  }, [])
  const displayNoteId = (e) => {
    navigate('/note-id/' + e.currentTarget.id)
  }
  return (
    <div className='notes'>
      <div className='notes-header'>
        <div className='notes-header-title'>Notes</div>
        <div className='notes-header-input'>
          <input
            type='search'
            name=''
            id=''
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='notes-header-icon'>
          <GoSearch />
        </div>
      </div>
      <div className='notes-body'>
        {notes
          ?.filter((el) =>
            el.title.toUpperCase().includes(search.toUpperCase())
          )
          .map((note) => {
            return (
              <Card
                displayNoteId={displayNoteId}
                newClass={'card-note'}
                key={note.id}
                id={note.id}
                title={note.title}
                text={
                  note.text.length > 10
                    ? note.text.substr(0, 30) + '...'
                    : note.text
                }
                date={note.date}
              />
            )
          })}
      </div>
      <Link
        className={'link'}
        to={'/add-note'}
        className='btn-add'
      >
        <GoPlus />
      </Link>
    </div>
  )
}

export default Notes
