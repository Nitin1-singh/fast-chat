import { auth } from "@/firebase/config";
import readAllUsers from "@/firebase/data/readAllUsers";
import { signOut } from "firebase/auth";

export function logOut() {
    // readAllUsers();
    signOut(auth)
    .then(()=>{
        console.log('out')
    })
    .catch((err)=>{
        console.log('sign out error')
    })
}       