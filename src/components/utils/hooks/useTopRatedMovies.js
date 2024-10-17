import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../constants"
import { addTopRatedMovies } from "../movieSlice"
import { useEffect } from "react"


 const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const getTopRatedMovies = async() => {

        const  data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
        // console.log()
        const jsonData = await data.json()
        dispatch(addTopRatedMovies(jsonData?.results))
        
    }
    useEffect(() => {
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies

//sk-P_10Ggt2knw2JKYuovsMz4GGmCyqG4GMmER7YBBz-5T3BlbkFJzjLT8YHhi7rEf9XAs9OwyallAbZhtArQqUcjemxV8A