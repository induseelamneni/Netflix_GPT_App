import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../constants"
import { addUpcomingMovies } from "../movieSlice"
import { useEffect } from "react"


 const useUpComingMovies = () => {
    const dispatch = useDispatch()

    const getUpComingMovies = async() => {

        const  data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS)
        const jsonData = await data.json()
        dispatch(addUpcomingMovies(jsonData.results))

    }

    useEffect(() => {
        getUpComingMovies()
    },[])
}

export default useUpComingMovies
