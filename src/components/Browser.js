
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";
import useNowPlayingMovies from "./utils/hooks/useNowPlayingMovies";
import usePopularMovies from "./utils/hooks/usePopularMovies";
import useTopRatedMovies from "./utils/hooks/useTopRatedMovies";
import useUpComingMovies from "./utils/hooks/useUpComingMovies";


const Browser =() =>  {

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()
    
    return(
       <>
            <Header/>
            <MainContainer />
            <MovieListContainer/>
         </>
           

    )
}

export default Browser;