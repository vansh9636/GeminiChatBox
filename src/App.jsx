import './App.css'
import { useState } from 'react'
import Register from './pages/Register'
import { createBrowserRouter, Route, BrowserRouter, Routes, RouterProvider, Navigate, Router } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import Login from './pages/Login'
import Protect from './Protect'

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Protect />}>
            <Route path='/' element={<HomeScreen />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
