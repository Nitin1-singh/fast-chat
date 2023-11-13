import { onValue, ref } from "firebase/database";
import { firebaseFirestore, firebaseRealTimeData } from "../config";
import { doc, onSnapshot } from "firebase/firestore";

export async function readAllUsersFirestore() {
    try {
        onSnapshot(doc(firebaseFirestore,"AllUserArray/users"),(doc)=>{
            return doc;
        });
    }catch(err) {
        console.log(err)
    }
}
export  function readChatNow(combineUid) {
    onValue(ref(firebaseRealTimeData,`chat/${combineUid}`),async (snapshot)=>{
        return  Object.values(snapshot.val())
    })
}

