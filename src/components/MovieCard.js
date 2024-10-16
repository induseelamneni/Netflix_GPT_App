import {IMG_CON_URL} from "./utils/constants"
const MovieCard = ({poster}) => {

    return(
        <div className="w-48 pr-4">
        <img src=  {IMG_CON_URL + poster}  alt="movie-poster"/>
        </div>
       
    )

}

export default MovieCard
