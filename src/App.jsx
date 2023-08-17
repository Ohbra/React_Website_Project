import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
    </>
  )
}

export default App
