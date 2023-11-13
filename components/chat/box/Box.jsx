import { useAuthContext } from "@/context/AuthContext";
import { writeChat } from "@/firebase/data/writeAllUsers";
import Image from "next/image";
import { useState } from "react"
import home from '/public/css/home/home.module.css';

export default  function Box() {
    const {user, chat, OtherUid, otherUsername, img} = useAuthContext({})
    const [message, setMessage] = useState("");
    const combineUid = user.uid > OtherUid ? user.uid+OtherUid:OtherUid+user.uid;

    return (
        <div className="col-md-12">
            <div className="col-12 d-flex align-items-center">
                <div className="ms-3 my-1">
                    <img style={{borderRadius:'50%'}} width={50} height={50} alt="profile-image" src={img[0].src} />
                </div>
                <div className="ms-4">
                    <span>{otherUsername}</span>
                </div>
            </div>
            <div className={`row container-fluid p-0 m-0`}>
            <div style={{overflowY:'scroll', height:'550px',overflowX:'hidden'}} className="d-flex pb-5">
                <div className={`col-6 ${home.chat}`}>
                        <ol>    
                            {
                                chat.map(data=>(
                                    data.message.uid === OtherUid ? <li className={`${home.otherChatTag} me-auto`}>{data.message.message}</li>:null
                                ))
                            }
                        </ol>
                </div>
                <div className={`col-6`}>
                        <ol className="p-0">    
                            {
                                chat != undefined ? chat.map(data=>(
                                    data.message.uid === user.uid ? <li  className={`${home.chatTag} ms-auto pe-4`} key={data.message.uid} >{data.message.message}</li>:null
                                )):null
                            }
                        </ol>
                </div>
                <div style={{autoFocus:true}}></div>
            </div>
                <div className={`${home.sendDiv} d-flex justify-content-between align-items-center mt-2`}>
                    <div className="w-100">
                        <input onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Enter your message"></input>
                    </div>
                    <div className="me-3">
                        <Image width={30} height={30} alt="send-btn" src={'/img/home/sent.png'} id={OtherUid} onClick={()=>{
                            writeChat(combineUid,user.uid,message);
                            setMessage("");
                        }} />
                    </div>
                </div>

            </div>
        </div>
    )
}