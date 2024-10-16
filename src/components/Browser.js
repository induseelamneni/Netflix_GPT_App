import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";
import useNowPlayingMovies from "./utils/hooks/useNowPlayingMovies";
import usePopularMovies from "./utils/hooks/usePopularMovies";
import useTopRatedMovies from "./utils/hooks/useTopRatedMovies";
import useUpComingMovies from "./utils/hooks/useUpComingMovies";
import GptSearchContainer from "./GptSearchContainer";


const Browser =() =>  {
    const isGptSearch = useSelector(store => store.gptSearch.search)

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()
    
    return(
       <>
            <Header/>
            {isGptSearch ? 
             <>
             <MainContainer />
             <MovieListContainer/>
             </>
            
            : 
            <GptSearchContainer/> 
           
            }
            
         </>
           

    )
}

export default Browser;