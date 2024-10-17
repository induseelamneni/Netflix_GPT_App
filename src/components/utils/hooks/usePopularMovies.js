import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../constants"
import {addPopularMovies } from "../movieSlice"
import { useEffect } from "react"


 const usePopularMovies = () => {
    const dispatch = useDispatch()

    const getPopularMovies = async() => {

        const  data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS)
        const jsonData = await data.json()
        dispatch(addPopularMovies(jsonData?.results))
        
    }

    useEffect(() => {
        getPopularMovies()
    },[])
}

export default usePopularMovies
