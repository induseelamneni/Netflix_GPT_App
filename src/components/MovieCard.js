import { useDispatch } from "react-redux"
import {IMG_CON_URL} from "./utils/constants"
import { addMovieId } from "./utils/eachMovieIdSlice"
const MovieCard = ({poster,movieId}) => {
  console.log(poster,"Pos")
  
   const dispatch = useDispatch()
    
  const onPlayVideo = (movieId) => {
    dispatch(addMovieId(movieId))
}

    return(
        
        //  poster ? null :
       (<div className="w-48 pr-4" >
        <img src=  {IMG_CON_URL + poster}  alt="movie-poster" onClick={()=>onPlayVideo(movieId)}/>
        </div>  )
        
    )
}
export default MovieCard
