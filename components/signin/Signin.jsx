import signinGoogle from "@/firebase/auth/signinGoogle";
import google from '/public/css/google/google.module.css';
import Image from "next/image";
export default function Signin() {
    return (
        <main className={`${google.bg} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`mb-5 ${google.img} ${google.circle}`}>
                <Image width={100} height={100} alt="logo" src={'/img/logo.png'} />
            </div>
            <div className={`${google.btn} d-flex justify-content-around  align-items-center`} onClick={()=>{
                signinGoogle();
            }}>
                <div className="m-3">
                    <Image className={`${google.img}`} width={40} height={40} alt="google-image" src={'/img/signin/google.svg'} />
                </div>
                <div className="m-3">
                    <p className={`p-0 m-0 ${google.pTag}`}>Google</p>
                </div>
            </div>
        </main>
    )
}