import Header from './components/Header'
import Notes from './components/Notes'
import NoteId from './components/NoteId'
import {Routes, Route} from "react-router-dom";
function App() {
 
  return <div className='App'>
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
    
  </div>
}

export default App
