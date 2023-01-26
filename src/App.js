import React, { useState } from 'react'
import Header from './components/Header'
import CreateArea from './components/CreateArea'

const App = () => {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevNotes) => {
      return[...prevNotes, newNote]
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  )
}

export default App