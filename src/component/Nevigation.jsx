import React, { useEffect, useState } from 'react'
import{Link ,useNavigate} from "react-router-dom"
 
import"../Css/Negivation.css"
const Nevigation = () => {
    const loginToken = localStorage.getItem("curdLogin")
  
    const [count, setCount]=useState(0) 
    const Navigate = useNavigate();
 
    const LogoutHandlar =()=>{
      localStorage.removeItem("curdLogin")
  
   Navigate("/")
   setCount(count+1)
    }
  return (
    <header className='header'>
      <div className="logo">
        <h3>CURD FIREBASE</h3>
      </div>
      <nav className='menu_bar'>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
      { (loginToken)? <button onClick={LogoutHandlar} id="logout_btn">login</button>:null}
      
      </nav>
    </header>
  )
}

export default Nevigation
