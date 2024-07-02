import { useState, useNavigate } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import StudentDetail from './pages/StudentDetail'
import SettingsKlassen from './pages/SettingsKlassen'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/student/:id' Component={StudentDetail} />
                    <Route path='/settings/klassen' Component={SettingsKlassen} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
