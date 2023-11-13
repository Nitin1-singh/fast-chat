"use client"
import Box from "@/components/chat/box/Box";
import Friend from "@/components/chat/friend/Friend";
import { logOut } from "@/components/logout/logoutEmail"
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import home from '/public/css/home/home.module.css';

export default function Home() {
    const {OtherUid,user} = useAuthContext({})
    console.log("user  aa = ",user)
    return(
        <section>
            <div className={`row container-fluid m-0 p-0`}>
                <div className={`p-0 m-0 col-md-4  ${home.bg}`}>
                    <div className={`d-flex justify-content-between align-items-center`}>
                        <div className="d-flex align-items-center">
                            <Image style={{borderRadius:'50%'}} className="ms-4 my-1" width={50} height={50} alt="profile-picture" src={user.photoURL} />
                            <p className="ps-3 m-0">{user.email}</p>
                        </div>
                        <div>
                            <Image className={`me-3 ${home.logout}`} width={40} height={40} alt="logout" src={'/img/home/logout.png'} onClick={()=>{
                                logOut();
                            }} />
                        </div>
                    </div>
                    <div className={`col-12 m-0 ${home.bg2}`}>
                        <Friend />
                    </div>
                </div>
                <div className={`col-8 ${home.box} p-0 m-0`}>
                        {OtherUid != null ? <Box /> :<div className="h-100 d-flex justify-content-center align-items-center"><span>Welcome to fast chat</span></div>}
                </div>
            </div>
        </section>
    )
}