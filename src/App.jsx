import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import StudentDetail from './pages/StudentDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/StudentDetail' Component={StudentDetail}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
