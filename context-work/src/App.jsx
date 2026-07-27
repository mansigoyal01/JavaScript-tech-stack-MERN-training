import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App