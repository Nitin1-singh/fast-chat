import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { firebaseFirestore } from "@/firebase/config";
import { useAuthContext } from "@/context/AuthContext";
import home from '/public/css/home/home.module.css';
import Image from "next/image";

export default function Friend() {
    const [allUsers,setAllUsers] = useState([]);
    const {setUid,user,readChat, setOtherUsername, setImage}  = useAuthContext({});
    useEffect(()=>{
        onSnapshot(doc(firebaseFirestore,"AllUserArray/users"),(doc)=>{
            try {
                setAllUsers(doc.data().allUser);
            } catch(err) {
                console.log(err);
            }
            });
    },[])

    return (
            <div className="col-md-12 p-0 m-0">
                <ol className={`${home.liTag} p-0 m-0`}>
                    {
                        allUsers.map(res=>(
                            (user.uid != res.uid) ? 
                            <div className={`d-flex align-items-center text-center px-4 py-3 ${home.liDiv}`}>
                                <div>
                                    <Image className={res.uid} style={{borderRadius:'50%'}} width={50} height={50} alt="profile-image" src={res.image}/>
                                </div>
                                <div className="px-4">
                                    <li className={`${home.liTag}`} onClick={(e)=>{
                                        const combineUid = user.uid > e.currentTarget.id ? user.uid+e.currentTarget.id:e.currentTarget.id+user.uid;
                                        const img = document.getElementsByClassName(e.currentTarget.id);
                                        setImage(img)
                                        setUid(e.currentTarget.id)
                                        setOtherUsername(e.target.innerText)
                                        readChat(combineUid)
                                    }} id={res.uid} key={res.uid}>{res.email}</li>
                                </div>
                            </div>:null
                        ))
                    }
                </ol>
            </div>
    )
}