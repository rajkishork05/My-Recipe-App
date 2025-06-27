import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './route/Home'
import Recipe from './route/Recipe'
import Settings from './route/Settings'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe' element={<Recipe/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </div>
  )
}

export default App
