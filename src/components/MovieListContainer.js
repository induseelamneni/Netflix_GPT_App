import { useSelector } from "react-redux"
import DifferentGenremovieList from "./DifferentGenremovieList"
import MovieContainer from "./MovieContainer"

const MovieListContainer = () => {
  const NowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
  const upcoming = useSelector(store => store.movies.upComingMovies)
  const userSelectedMovie = useSelector(store => store.moviesIds?.movieId)
 
    return(
      NowPlayingMovies&& (
        <div className="bg-black">
          {userSelectedMovie && <div className="h-[650px] w-[950px] flex justify-center items-center fixed z-40 top-0 bg-white top-36 left-96">
          <MovieContainer movieId = {userSelectedMovie}  className="full-screen"/>
          </div>
          }
      <div className="-mt-64 pl-12 relative z-20 overflow-x-hidden">
      <DifferentGenremovieList title = {"NowPlaying Movies"} movies = {NowPlayingMovies}/>
      <DifferentGenremovieList title = {"TopRated"} movies = {topRatedMovies}/>
      <DifferentGenremovieList title = {"Upcoming"} movies = {upcoming}/>
      <DifferentGenremovieList title = {"Popular"} movies = {popularMovies}/>
      </div>
      </div>)
    )   
}

export default MovieListContainer