import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import StudentDetail from './pages/StudentDetail'
import Klassen from './pages/klassen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/StudentDetail' Component={StudentDetail}/>
          <Route path='/klassen' Component={Klassen}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
