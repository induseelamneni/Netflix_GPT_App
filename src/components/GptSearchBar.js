import { useDispatch, useSelector } from "react-redux";
import langue from "./utils/languageConstants";
import { useRef, useState } from "react";
// import openai from "./utils/openai";
import { API_OPTIONS } from "./utils/constants";
import { addGptMovieResults } from "./utils/gptSearchSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";
import MovieContainer from "./MovieContainer"

const GptSearchBar = () => {
    const [btnClicked,isBtnClicked] = useState(false) 
    const dispatch = useDispatch()
    const selectedLanguage = useSelector(store => store.language.lang)
    const userSelectedMovie = useSelector(store => store.moviesIds?.movieId)
    const searchText = useRef(null)

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+
            movie +
            "&include_adult=false&language=en-US&page=1", 
            API_OPTIONS
        )
        const json = await data.json()
        return json.results

    }

    const handleGptSearchClick = async() => {

        //make a API call to GPT API and get movie results
        // const gptQuery = "Act as a Movie Recommendation system suggest some movies for the query : " 
        // + searchText.current.value +
        //  ". only give me names of 5 movies, comma seperated like the examples result give ahead. Example Results: djtillu, f2, tillu square, omboombush, chari111 " 

        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(gptResults.choices)

        //   if(!gptResults.choices){
        //     <div>API Is FAiled</div>

          
        // }
          
        //   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
        isBtnClicked(true)
       //below are dummy gpt results if have openAI key you can fetch dnamically
        const gptMovies = ["Athadu","Ashta Chamma","Malliswari","Aha Naa Pellanta","Fun and Frustration"]
        const data = gptMovies.map(movie => searchMovieTMDB(movie))
        console.log(data,"test")
        const tmdbResults = await Promise.all(data)
        dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}))

    }

    return (
        <>
        <div className="pt-[10%] flex justify-center">
        <form className=" bg-black w-1/2 grid grid-cols-12 " 
              onSubmit={(e) =>e.preventDefault()}
        >
        <input 
        ref={searchText}
        placeholder= {
            langue[selectedLanguage].gptSearchPlaceholder
        } 
        className="col-span-9 rounded-lg m-4 p-4"/>
        <button className="col-span-3 bg-red-700 py-4 m-4 rounded-lg" onClick={handleGptSearchClick}>{langue[selectedLanguage].language}</button>
     </form>
    
     </div>
     <div>
     {userSelectedMovie && <div className="h-[650px] w-[950px] flex justify-center items-center fixed z-40 top-0 bg-white top-36 left-96">
          <MovieContainer movieId = {userSelectedMovie}  className="full-screen"/>
          </div>
     }
         
     </div>
      <div>
      {btnClicked &&  <GptMovieSuggestions/>}
      </div>
      </>
    );
};

export default GptSearchBar;
