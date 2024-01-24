import MovieCard from "./MovieCard"

const DifferentGenremovieList = ({title, movies}) => {


    return (
        <div className="p-4">
            <h1 className="text-3xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll p-1">
            <div className="flex">
          {movies?.map(each => 
           
            <MovieCard key={each.id} poster = {each.poster_path}/>
        

          )}
              </div>
         
         </div>
         </div>
       
    )


}

export default DifferentGenremovieList

//overflow-x-scroll