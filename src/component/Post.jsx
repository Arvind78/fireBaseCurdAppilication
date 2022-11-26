import React, { useEffect, useState } from 'react'
import "../Css/Post.css"
import postCurd from "./postCurd"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
  
const Post = () => {
  const [title, setTitle] = useState("")
  const [body, setbody] = useState("")
  const [appPost, setAllPost] = useState([])
  const [userName, setuserName] = useState('')
  const [id ,setId]=useState("")


  const postHandlar = async(e) => {
    e.preventDefault();
    setuserName(localStorage.getItem('username'))
  

    if (title === "" || body === "" || userName == "") {
      alert("All field is required")
      return false
    }
if(id==undefined || id=="") {
      const newPost = {
        title,
        body,
        userName
      }
      await postCurd.addPost(newPost)
      alert("Post Send Sucessfully")
      setTitle('');
      setbody("")
      getAllPostData()
      return false;
    }

    if(id !==undefined || id !==""){
      const newPost = {
        title,
        body,
        userName
      }
        await postCurd.updatePost(id, newPost)
        setId("")
        setTitle('');
        setbody("")
        getAllPostData()
      alert("update sucessfully post")
      return false;
    }

    // =========================================
    setTitle('');
    setbody("")
    getAllPostData()
  }


  useEffect(() => {
    getAllPostData()
    setuserName(localStorage.getItem("username"))

  }, [])




  const getAllPostData = async () => {
    let res = await postCurd.getAllPost();
    setAllPost(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  }


  return (
    <div className='postContenar'>
  
      <div className='formControllar' >
        <h2 style={{textAlign:"center", marginBottom:"10px"}}>Write  Edit  and Update Post </h2>
        <form onSubmit={postHandlar}>
          <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Post title" value={title} />
          <textarea rows="4" cols="50" onChange={(e) => setbody(e.target.value)} placeholder="Write post" value={body} ></textarea>
          <input type="text" value={userName} />
          <button type='submit'>Post/Update</button>
        </form>
      </div>

      <TableContent appPost={appPost} fxn={getAllPostData}  
      setTitle={setTitle} setbody={setbody} setId={setId}/>
    </div>
  )
}

export default Post



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    Width:100,
},
});

function TableContent({ appPost, fxn ,setTitle,setbody,setId }) {

  const classes = useStyles();

  const getPostId = async (id) => {
 const postShap = await postCurd.getPost(id)
  console.log(postShap.data())
   setTitle(postShap.data().title)
   setbody(postShap.data().body)
   setId(id)
    
 }
const DeleteHandlar = async (id) => {

     await postCurd.deletePost(id)
    // after deleted post component  re-render fxn() ;
    fxn()
}
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell align="right">PostTitle</StyledTableCell>
            <StyledTableCell align="right"> PostBody</StyledTableCell>
            <StyledTableCell align="right">PostUpdate</StyledTableCell>
            <StyledTableCell align="right"> PostDelete</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {appPost.map((row) => (
            <StyledTableRow key={row.id}>

              <StyledTableCell component="th" scope="row">
                {row.userName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right"   >{row.body}</StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={(e) => getPostId(row.id)}>Edit</button>
              </StyledTableCell>
              <StyledTableCell align="right" >
                  <button onClick={(e) => DeleteHandlar(row.id)}>Delete</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

