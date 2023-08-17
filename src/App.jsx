import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
    </>
  )
}

export default App
