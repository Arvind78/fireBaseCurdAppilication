import React, { useEffect, useState } from 'react'
import"../Css/Post.css"
import postCurd from "./postCurd"
 


const Post = () => {
  const[title,setTitle]=useState("")
  const[ body,setbody]=useState("")
  const[userName,setuserName]=useState("")
// const Logged = () => {
//     Navigate("/post")
// uid
//   }

const postHandlar=async(e)=>{
  e.preventDefault();
  if(title==="" || body==="" ||userName==""  ){
    alert("All field is required")
  }
  else{
    const newPost ={
      title,
      body
    }
    await postCurd.addPost(newPost)
    alert("Post Send Sucessfully")
  }

  // =========================================
  setTitle('');
  setbody("")
 }
   return (
    <div className='postContenar'>
       <div className='formControllar' >
        <form onSubmit={postHandlar}>
          <input type="text" onChange={(e)=>setTitle(e.target.value)}  placeholder="Post title" value={title} />
          <input type="text" onChange={(e)=>setbody(e.target.value)} placeholder="Write post" value={body} />
          <input type="text" onChange={(e)=>setuserId(e.target.value)} placeholder="" />
          <button type='submit'>Post</button>
        </form>
       </div>
 
      
    </div>
  )
}

export default Post


 