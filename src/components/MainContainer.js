import { useSelector } from "react-redux";
import MovieTitleContainer from "./MovieTitleContainer";
import MovieTrailerContainer from "./MovieTrailerContainer";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return 

    const {title,overview,id} = movies[0]
      return(
        <div >
       <MovieTitleContainer movieTitle = {title} overview={overview}/>
       <MovieTrailerContainer movieId ={id} />
       </div>
      )   
}

export default MainContainer