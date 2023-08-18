import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/services' element={<Services />}/>
          <Route exact path='/products' element={<Product />}/>
          <Route exact path='/sign-up' element={<SignUp/>}/>
        </Routes>
    </>
  )
}

export default App
