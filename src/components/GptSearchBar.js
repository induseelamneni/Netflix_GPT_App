import { useSelector } from "react-redux";
import langue from "./utils/languageConstants";
const GptSearchBar = () => {
    
    const selectedLanguage = useSelector(store => store.language.lang)

    return (
        <div className="pt-[10%] flex justify-center">
        <form className=" bg-black w-1/2 grid grid-cols-12 " onSubmit={(e) =>e.preventDefault()}>
        <input 
        placeholder= {
            langue[selectedLanguage].gptSearchPlaceholder
        } 
        className="col-span-9 rounded-lg m-4 p-4"/>
        <button className="col-span-3 bg-red-700 py-4 m-4 rounded-lg">{langue[selectedLanguage].language}</button>
     </form>
     </div>
    );
};

export default GptSearchBar;
