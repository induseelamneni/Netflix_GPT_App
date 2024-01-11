import { useEffect } from "react";
import Browser from "./Browser";
import Login from "./Login";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import { auth } from "./utils/firebase" 
import { addUser, removeUser } from "./utils/userSlice";


const Body = () => {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user,"body")
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName,photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
              // ...
            } else {
              dispatch(removeUser())
              // User is signed out
              // ...
            }
          });

    },[])

 return(
    <div>
        <RouterProvider  router = {appRouter}/>

    </div>
 )
}

export default Body;