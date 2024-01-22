
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";
import useNowPlayingMovies from "./utils/hooks/useNowPlayingMovies";


const Browser =() =>  {
  

    useNowPlayingMovies()
   
   
    
    return(
       <>
            <Header/>
            <MainContainer />
            <MovieListContainer/>
         </>
           

    )
}

export default Browser;