import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";
import { writeAllUsersFirebase } from "../data/writeAllUsers";

export default function signinGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then((result)=>{
        writeAllUsersFirebase(result.user.uid,result.user.email,result.user.displayName,result.user.photoURL);
    })
    .catch((err)=>{
        console.log(err);
    })
}