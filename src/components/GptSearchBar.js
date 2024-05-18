import { useSelector } from "react-redux";
import langue from "./utils/languageConstants";
import { useRef } from "react";
import openai from "./utils/openai";
const GptSearchBar = () => {
    
    const selectedLanguage = useSelector(store => store.language.lang)
   
    const searchText = useRef(null)

    const handleGptSearchClick = async() => {
        
        console.log(searchText.current.value)

        //make a API call to GPT API and get movie results
        const gptQuery = "Act as a Movie Recommendation system suggest some movies for the query : " 
        + searchText.current.value +
         ". only give me names of 5 movies, comma seperated like the examples result give ahead. Example Results: djtillu, f2, tillu square, omboombush, chari111 " 

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResults.choices)

    }

    return (
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
    );
};

export default GptSearchBar;
