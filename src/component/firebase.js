 import { initializeApp } from "firebase/app";
 import {getFirestore} from "firebase/firestore"
 import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyB6mGJmSqDxVKy4Iz2qJZL-Vdl-Hd7m5t4",
  authDomain: "webapplication-a2b7b.firebaseapp.com",
  projectId: "webapplication-a2b7b",
  storageBucket: "webapplication-a2b7b.appspot.com",
  messagingSenderId: "1092916210371",
  appId: "1:1092916210371:web:731f10cdd248adce305076"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const  Auth = getAuth(app)
 const Provider = new GoogleAuthProvider();
 export const Db =getFirestore(app) 
 
export const signInWithGoogle=(logged)=>{
  signInWithPopup(Auth,Provider)
  .then((res)=>{console.log(res),localStorage.setItem("curdLogin",res.user.accessToken),logged()})
  .catch((err)=>console.log())
}