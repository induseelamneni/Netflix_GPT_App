import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../constants"
import { addMovieId } from "../movieSlice"
import { useEffect } from "react"
import { addPosterMovie } from "../eachMovieIdSlice"

const usePosterVideo = (movieId,eachMovieTitle) => {
    console.log(movieId,eachMovieTitle)

    const dispatch = useDispatch()

    const getMovieVideos = async() => {
         const videoData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS) 

         const mainVideos = await videoData.json()
   
         const filteredVideo = mainVideos?.results?.filter((each) => each.type === "Trailer")
         console.log(filteredVideo,"post")

         const trialer = filteredVideo.length? filteredVideo[0] : mainVideos.results[0];
       
        dispatch(addPosterMovie(trialer))
        
    }

    useEffect(() => {
        getMovieVideos()
    },[])
       
}

export default usePosterVideo