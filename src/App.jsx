import { useState, createContext } from 'react'
import Header from './components/Header'
import Notes from './components/Notes'
import NoteId from './components/NoteId'
import AddNote from './components/AddNote'
import { Routes, Route } from 'react-router-dom'
export const AppContext = createContext()

function App() {
  const [notes, setNotes] = useState([])
  const [ValueText, setValueText] = useState('')
  const [ValueTitle, setValueTitle] = useState('')
  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          notes,
          setNotes,
          ValueText,
          setValueText,
          ValueTitle,
          setValueTitle,
        }}
      >
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Notes />}
          />
          <Route path='/note-id/'>
            <Route
              path={':id'}
              element={<NoteId />}
            />
          </Route>
          <Route
            path='/add-note'
            element={<AddNote />}
          />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
