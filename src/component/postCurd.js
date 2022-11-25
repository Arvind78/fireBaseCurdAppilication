import {Db} from "./firebase";
import{ collection,getDocs,getDoc,doc,updateDoc,deleteDoc,addDoc} from "firebase/firestore";


const collectionRef =collection(Db,"post")
class postCurdOpretion{
  addPost =(newPost)=>{
  return addDoc(collectionRef,newPost)
  }

  updatePost =(id,updatePost)=>{
   const PostDoc = doc(Db,"post",id)
   return updateDoc(PostDoc,updatePost)
  }

  deletePost=(id)=>{
    const PostDoc = doc(Db,"post",id)
    return deleteDoc(PostDoc)
  }

  getAllPost =()=>{
    return getDocs(collectionRef)
  }
  
  getPost =(id)=>{
    const PostDoc = doc(Db,"post",id)
    return getDocs(PostDoc)
  }

}

export default new postCurdOpretion;
