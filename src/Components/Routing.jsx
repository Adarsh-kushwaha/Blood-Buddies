import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Patient/Login'
import Register from './Patient/Register'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                
            </Routes>
        </div>
    )
}

export default Routing
