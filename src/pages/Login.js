import React from 'react'
import { googleLogo, githubLogo } from "../assets"
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, } from "firebase/auth"
import { ToastContainer,toast } from 'react-toastify'

export const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup( auth, provider )
    .then((result) => {
        const user = result.user;
      console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
  };
   
  
   
    // const auth = getAuth();
    //const provaider = new GoogleAuthProvider();
   // const handleGoogleLogin = (e) => {
     //   e.preventDefault();
       // console.log(auth);
       //signInWithPopup(auth, provaider)
        //.then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
        //    const credential = GoogleAuthProvider.credentialFromResult(result);
          //  const token = credential.accessToken;
            // The signed-in user info.
          // const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        //  }).catch((error) => {
            // Handle Errors here.
         //   const errorCode = error.code;
          //  const errorMessage = error.message;
            // The email of the user's account used.
           // const email = error.customData.email;
            // The AuthCredential type that was used.
           // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        //  });
        
       

       
    

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
        <div className='w-full flex items-center justify-center gap-10'>
           <div onClick={handleGoogleLogin} className='w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600'>
           <img className='w-16' src={googleLogo} alt='googleLogo'></img>
            <span className='text-sm text-gray-900'> Sign in </span>
           </div>
           <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'> Sign Out </button>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
           <div  className='w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600'>
           <img className='w-16' src={githubLogo} alt='githubLogo'></img>
            <span className='text-sm text-gray-900'> Sign in </span>
           </div>
           <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'> Sign Out </button>
        </div>
    </div>
  )
}
