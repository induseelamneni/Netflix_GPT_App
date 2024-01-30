import { useSelector } from "react-redux"
import DifferentGenremovieList from "./DifferentGenremovieList"

const MovieListContainer = () => {
  const NowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
  const upcoming = useSelector(store => store.movies.upComingMovies)
 
    return(
      NowPlayingMovies&& (
        <div className="bg-black">
      <div className="-mt-64 pl-12 relative z-20">
      <DifferentGenremovieList title = {"NowPlaying Movies"} movies = {NowPlayingMovies}/>
      <DifferentGenremovieList title = {"TopRated"} movies = {topRatedMovies}/>
      <DifferentGenremovieList title = {"Upcoming"} movies = {upcoming}/>
      <DifferentGenremovieList title = {"Popular"} movies = {popularMovies}/>
      </div>
      </div>)
    )   
}

export default MovieListContainer