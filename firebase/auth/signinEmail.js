import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export default function EmailSignIn(email,password) {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log("user Sign in = ",userCredential.user);
    })
    .catch((err)=>{
        console.log("sign in = ",err.message);
    })
}