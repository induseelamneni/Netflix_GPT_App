import { useState } from "react";
import Header from "./Header";


const Login=() => {
    const [isSignIn , setIsSignIn] = useState(true)

    const onClickSignup = () => {
        setIsSignIn(!isSignIn)

    }
return(
    <div>
        <Header/>
       
        <div className="absolute">
            
        <img 
        src= "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="bg-image" 
        />

        </div>
        <form className="absolute bg-black  my-36 p-12  w-3/12 mx-auto left-0 right-0 text-white">
              <h1 className="text-3xl m-2 font-bold ">{isSignIn ?  "Sign In" : "Sign Up"}</h1>
              {!isSignIn && <input type="text" placeholder="Enter Full Name" className="m-4 p-4 w-full bg-gray-800"/> }
              <input type="text" placeholder="Enter Email Address" className="m-4 p-4 w-full bg-gray-800"/>
              <input type="password" placeholder="Enter Password"className="m-4 p-4 w-full  bg-gray-800"/>
           
              <br/>

              <button className="p-4 m-4 bg-red-700 text-center w-full rounded-lg">{isSignIn ?  "Sign In" : "Sign Up"}</button>
  
               <p className="p-4"> {isSignIn ? "New to Netflix?" : "Already registered?"}  <span className="text-bold text-xl" onClick={onClickSignup}>{isSignIn ? "Sign up now.":"Sign In Now"}</span></p>
          </form>
      
       
    </div>
)
}

export default Login;