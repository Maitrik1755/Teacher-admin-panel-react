import React from 'react'
import Admin from './Admin'
import Register from './Register'
import Login from './Login'
import Adminprotect from './Adminprotect'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Adminprotect />}>
        <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App