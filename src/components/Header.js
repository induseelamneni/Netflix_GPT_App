import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from "./utils/firebase"
import { useSelector } from "react-redux";

const Header = () => {

  const user = useSelector(store => store.user)
  console.log(user.photoURL,user.email)

  const navigate = useNavigate()

 const handleSignOut = () => {
  signOut(auth).then(() => {
    navigate("/")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    navigate("/error")
  });
}
   
        return (
        
           
            <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-full flex  justify-between">
               <img src= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
               alt="logo"
               className="w-44"
               />
              {user && <div className="flex align-items-center w-9 mr-10 h-10 mt-4">
               <img src={user.photoURL} alt="user-photo mr-4" />
                {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocJ3bN77215G12HMHlXZTIjvNXejYkVS-Ymznl7r6zmNp2eS=s288-c-no" alt="user-photo mr-4" /> */}
               <button onClick={handleSignOut}>LogOut</button>

               </div>

               }
               
                
            </div> 
          

        
        
              
        
          
          
        );
   
}

export default Header;