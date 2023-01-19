import { useState, createContext } from 'react'
import Header from './components/Header'
import Notes from './components/Notes'
import NoteId from './components/NoteId'
import {Routes, Route} from "react-router-dom";
export const AppContext = createContext()

function App() {
  const [notes, setNotes] = useState([])
  return <div className='App'>
    <AppContext.Provider value={{notes, setNotes}}>
    <Header/>
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
  </Routes>
  </AppContext.Provider>
  </div>
}

export default App
