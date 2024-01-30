import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "./utils/firebase"
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";
import {useDispatch} from "react-redux"
import { LOGO ,SUPORTED_LANGUAGES,USER_ICON} from "./utils/constants";
import { searchBtn } from "./utils/gptSearchSlice";
import { addLanguage } from "./utils/languageSlice";

const Header = () => {

  const user = useSelector(store => store.user)
  const isGptSearch = useSelector(store => store.gptSearch.search)
 
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

const onToggleBtn = () => {
  dispatch(searchBtn(true))
}
const selectedOption = (e) => {
  dispatch(addLanguage(e.target.value))
}
        return (        
            <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full flex  justify-between">
               <img src= {LOGO} 
               alt="logo"
               className="w-44"
               />
              {user && <div className="flex align-items-center w-22 mr-10 h-10 mt-4 pr-2">
                {!isGptSearch && 
                  <select className="mr-2 rounded-lg p-2" onChange={selectedOption}>{
                    SUPORTED_LANGUAGES.map((lan) => (
                      <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>
                    ))
                  }
                  </select>
                }
                
              <button className="text-white bg-purple-600 p-2 mr-2 rounded-lg text-bold text-xl" onClick={onToggleBtn}>{isGptSearch? "GPT Search" : "HomePage"}</button>
               
                <img src = {USER_ICON}  alt="user-photo" />
               <button onClick={handleSignOut} className="text-white text-bold text-xl ml-2">Sign Out</button>
               </div>
               } 
            </div> 
        );
}

export default Header;

// src="https://lh3.googleusercontent.com/a/ACg8ocJ3bN77215G12HMHlXZTIjvNXejYkVS-Ymznl7r6zmNp2eS=s288-c-no"