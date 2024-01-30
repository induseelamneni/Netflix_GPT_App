import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../constants"
import { addMovies } from "../movieSlice"
import { useEffect } from "react"


 const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async() => {

        const  data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS)
        const jsonData = await data.json()
        dispatch(addMovies(jsonData.results))

    }

    useEffect(() => {
        getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies