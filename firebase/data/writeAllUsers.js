import { push, ref, set,  } from "firebase/database";
import { firebaseRealTimeData } from "../config";
import { arrayUnion,doc, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "../config";

export async function writeAllUsersFirebase(uid,email,username,img) {
    const data = {
        uid:uid,
        email:email,
        username:username,
        image:img
    }

    const refDoc1 = await setDoc(doc(firebaseFirestore,"AllUserArray/users"),{
        allUser: arrayUnion(data)
    },{merge:true});
}
export async function writeChat(combineUid,uid,message) {
    const messageData = {
        uid:uid,
        message:message
    };
    const chatRef = set(push(ref(firebaseRealTimeData,`chat/${combineUid}/`)),{
        message:messageData
    })
}