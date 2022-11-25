import React,{useEffect,useState} from 'react'
import { doc } from 'firebase/firestore'
import postCurd from "./postCurd"
import "../Css/Home.css"
 
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    Width: 100,
    marginTop:20
  },
});

export default function Home() {
  const classes = useStyles();
  const[ appPost,setAllPost]=useState([])
  useEffect(()=>{
    getAllPostData()
  },[])
  
  const getAllPostData =async()=>{
   let res = await postCurd.getAllPost();
   setAllPost(res.docs.map((doc)=>({...doc.data(),id:doc.id})))
   
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Sr.No</StyledTableCell>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell align="right">PostTitle</StyledTableCell>
            <StyledTableCell align="right"> PostBody</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          { appPost.map((row,index) => (
            <StyledTableRow key={index}>
               <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row. userName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right" >{row.body}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

 