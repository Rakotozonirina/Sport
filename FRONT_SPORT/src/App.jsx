import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <FirstPage/> } />
      </Routes>
    </Router>
  )
}

export default App
