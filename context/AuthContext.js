"use client"
import { auth, firebaseRealTimeData } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { createContext, useContext, useState, useEffect } from "react";


export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = useState(null);
    const [OtherUid,setUid] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chat, setChat] = useState([]);
    const [otherUsername, setOtherUsername] = useState(null)
    const [img, setImage] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    function readChat(combineUid) {
        onValue(ref(firebaseRealTimeData,`/chat/${combineUid}`), (snapshot) => {
            try {
                snapshot.val() === null ? setChat([]):setChat(Object.values(snapshot.val()))
            }catch(err) {
                console.log('read chat err')
            }
        })
    }
    return (
        <AuthContext.Provider value={{ user, setUid, OtherUid, readChat, chat, otherUsername, setOtherUsername, img, setImage }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};