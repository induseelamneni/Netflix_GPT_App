import {useDispatch, useSelector } from "react-redux"
import useTrailer from "./utils/hooks/useTrailer"
import usePosterVideo from "./utils/hooks/usePosterVideo"
import { addMovieId } from "./utils/eachMovieIdSlice"
const MovieContainer = ({movieId}) => { 
    const dispatch = useDispatch()
 
    const trailerVideo = useSelector(store => store.moviesIds.posterMovie)
   
       usePosterVideo(movieId)

    const onClosePosterTrailer = () => {
           dispatch(addMovieId(null))
    }

    return(
        <div>
            <div className=" flex justify-end">
            <button className="p-1" onClick={onClosePosterTrailer}>❌ </button>
            </div>
        <iframe 
            className=" aspect-video p-4 h-[580px] w-[880px]" 
           src = {"https://www.youtube.com/embed/" + trailerVideo?.key  +  "?&autoplay=1&mute=1"}>
        </iframe>
        </div>
    )
}

export default MovieContainer