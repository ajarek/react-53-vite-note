import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../App'
import { GoSearch } from 'react-icons/go'
import { useNavigate } from "react-router-dom";
import Card from './Card'

const Notes = () => {
  const {notes, setNotes}  = useContext(AppContext)
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('./data.json')

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      setNotes(await res.json())
    }
    getData()
  }, [])
  const displayNoteId=(e)=>{
    
    navigate("/note-id/"+e.currentTarget.id);
     
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
          />
        </div>
        <div className='notes-header-icon'>
          <GoSearch />
        </div>
      </div>
      <div className='notes-body'>
        {notes?.map((note) => {
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
    </div>
  )
}

export default Notes
