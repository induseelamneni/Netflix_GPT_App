import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "./utils/firebase"
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import {useDispatch} from "react-redux"
import { LOGO ,USER_ICON} from "./utils/constants";

const Header = () => {

  const user = useSelector(store => store.user)
  // console.log(user.photoURL,user.email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleSignOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/error")
  });
}

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
        navigate("/browser")
   
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    return  () => unsubscribe()

},[])
   
        return (
        
           
            <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full flex  justify-between">
               <img src= {LOGO} 
               alt="logo"
               className="w-44"
               />
              {user && <div className="flex align-items-center w-9 mr-10 h-10 mt-4">
               {/* <img src={user?.photoURL} alt="user-photo mr-4" /> */}
                <img src = {USER_ICON}  alt="user-photo mr-4" />
               <button onClick={handleSignOut} className="text-white-500">LogOut</button>
               </div>
               }
            </div> 
        );
}

export default Header;

// src="https://lh3.googleusercontent.com/a/ACg8ocJ3bN77215G12HMHlXZTIjvNXejYkVS-Ymznl7r6zmNp2eS=s288-c-no"