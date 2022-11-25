import React from 'react'
import {signInWithGoogle} from "./firebase"
import"../Css/GoogleAuth.css"
const GoogleAuth = ({Logged}) => {

  return (
    <div className='GoogleAuth'>
       {/* <button onClick={signInWithGoogle}>Google Auth</button> */}
        <div className="signinContenar">
  
          <h3 >SignIn User with Google  </h3>
 
       <button type="button" className="login-with-google-btn" onClick={()=>signInWithGoogle(Logged)} > Sign in with Google</button>
       </div>
    </div>
  )
}

export default GoogleAuth
