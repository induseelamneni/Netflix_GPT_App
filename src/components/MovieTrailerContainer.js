import { useEffect } from "react"
import {API_OPTIONS} from "./utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addMovieId } from "./utils/movieSlice"
import useTrailer from "./utils/hooks/useTrailer"

const MovieTrailerContainer = ({movieId}) => { 
    const trailerVideo = useSelector(store => store.movies.movieId)
    console.log(trailerVideo,"tris")

    useTrailer(movieId)
   

    return(
        <div>
           <iframe 
          className="w-screen aspect-video" 
           src = {"https://www.youtube.com/embed/" + trailerVideo?.key  +  "?&autoplay=1&mute=1"}
          
        //    title="YouTube video player" 
         
        //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowfullscreen>

           </iframe>
        </div>
    )
}

export default MovieTrailerContainer