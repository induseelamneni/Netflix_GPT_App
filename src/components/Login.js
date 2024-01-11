import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidations } from "./utils/formValidations";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from "./utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";



const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
  



    const onClickSignup = () => {
        setIsSignIn(!isSignIn)

    }
    const handleButtonClick = (e) => {
          console.log(name)
          console.log(email)
       
    
        const message = checkValidations(email.current.value, password.current.value)
        
      
        setErrorMsg(message )

        if(message) return 
         
       
       if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
 
        const user = userCredential.user;
        updateProfile(auth.user, {
          displayName: "INDU", 
          photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJ3bN77215G12HMHlXZTIjvNXejYkVS-Ymznl7r6zmNp2eS=s288-c-no"
        })
        .then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser
          dispatch(
            addUser({
              uid:uid, 
              email:email, 
              displayName:displayName,
              photoURL:photoURL
            })
            )
          navigate("/browser")
        })
        .catch((error) => {
  
          setErrorMsg(error.message)
        });
       
        console.log(user)
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + " "+ errorMessage)
    setErrorMsg(errorCode + " "+ errorMessage )
   
    // ..
  });
}else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      navigate("/browser")
      console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + " "+ errorMessage )
    navigate("/")
  });
}
}

return(
    <div>
        <Header/>
       
        <div className="absolute">
            
        <img 
        src= "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="bg" 
        />

        </div>
        <form className="absolute bg-black  my-36 p-12  w-3/12 mx-auto left-0 right-0 text-white" onSubmit={(e) =>e.preventDefault() }>
              <h1 className="text-3xl m-2 font-bold ">{isSignIn ?  "Sign In" : "Sign Up"}</h1>
              {!isSignIn && <input type="text" placeholder="Enter Full Name" className="m-4 p-4 w-full bg-gray-800"  ref={name}/> }
              <input type="text" placeholder="Enter Email Address" className="m-4 p-4 w-full bg-gray-800" ref={email}/>
              <input type="password" placeholder="Enter Password"className="m-4 p-4 w-full  bg-gray-800" ref={password}/>
              <p className="p-4 text-red-600 font-bold text-xl">{errorMsg}</p>
           
              <br/>

              <button className="p-4 m-4 bg-red-700 text-center w-full rounded-lg" onClick={handleButtonClick}>{isSignIn ?  "Sign In" : "Sign Up"}</button>
  
               <p className="p-4"> {isSignIn ? "New to Netflix?" : "Already registered?"}  <span className="text-bold text-xl" onClick={onClickSignup}>{isSignIn ? "Sign up now.":"Sign In Now"}</span></p>
          </form>
      
       
    </div>
)
}

export default Login;