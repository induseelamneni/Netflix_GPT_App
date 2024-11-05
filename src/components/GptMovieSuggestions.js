import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import DifferentGenremovieList from "./DifferentGenremovieList";

const GptMovieSuggestions =() => {

    const {movieNames, movieResults} = useSelector(store => store.gptSearch)
    console.log(movieNames, "movies")

    if(!movieNames) return <Shimmer/>

        return (
            <div className="bg-black bg-opacity-70 p-4 m-4">
                <div>
               {movieNames.map((movie,index) => (
                  <DifferentGenremovieList key={movie} title = {movie} movies = {movieResults[index]}/>

               ))} 
               </div>
             
            </div>
        );
    
}

export default GptMovieSuggestions
