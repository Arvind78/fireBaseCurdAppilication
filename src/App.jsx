import React, { useState } from 'react'
import './App.css'
import GoogleAuth from './component/GoogleAuth'
import Post from './component/Post'
import Home from './component/Home'
import { Routes, Route, useNavigate } from "react-router-dom"
import Nevigation from './component/Nevigation'
function App() {
  const Token = localStorage.getItem("curdLogin")
const Navigate = useNavigate();
const [profile,setProfile]=useState('')
  //after logining re-render commponent
  const Logged = (displayName) => {
    Navigate("/")
    setProfile(displayName)
  }
  return (
    <div className="App">
      <Nevigation />
      <Routes>
        <Route path='/' element={(Token) ? <Home /> : <GoogleAuth Logged={Logged} />} />
        <Route path='/post' element={(Token) ? <Post UserName={profile} /> : <GoogleAuth Logged={Logged}  />} />
      </Routes>
    </div>
  )
}

export default App
