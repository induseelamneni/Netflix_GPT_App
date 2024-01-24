import {useSelector } from "react-redux"
import useTrailer from "./utils/hooks/useTrailer"

const MovieTrailerContainer = ({movieId}) => { 
    const trailerVideo = useSelector(store => store.movies.movieId)

    useTrailer(movieId)

    return(
        <div>
        <iframe 
          className="w-screen aspect-video" 
           src = {"https://www.youtube.com/embed/" + trailerVideo?.key  +  "?&autoplay=1&mute=1"}
           allowFullScreen>

        </iframe>
        </div>
    )
}

export default MovieTrailerContainer