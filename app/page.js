"use client"
import Signin from "@/components/signin/Signin";
import { useAuthContext } from "@/context/AuthContext";
import Home from "../components/home/Home";

export default function Root() {
    const userState = useAuthContext()
    if(userState.user != null) return (<Home />);
    else {
        return (
            <Signin />
        )
    }
}