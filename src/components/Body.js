<<<<<<< HEAD

=======
>>>>>>> app first commit
import Browser from "./Browser";
import Login from "./Login";
import {RouterProvider, createBrowserRouter} from "react-router-dom"





const Body = () => {
  
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

<<<<<<< HEAD
 

=======
>>>>>>> app first commit
 return(
    <div>
        <RouterProvider  router = {appRouter}/>

    </div>
 )
}

export default Body;