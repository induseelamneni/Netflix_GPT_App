import {configureStore} from "@reduxjs/toolkit"
import userSlice  from "./userSlice"
import movieSlice from "./movieSlice"
import gptSearchSlice from "./gptSearchSlice"
import languageSlice from "./languageSlice"
import eachMovieIdSlice from "./eachMovieIdSlice"

const appStore = configureStore({
    reducer:{
       user:userSlice,
       movies:movieSlice,
       gptSearch :gptSearchSlice,
       language: languageSlice,
       moviesIds : eachMovieIdSlice
    }

})

export default appStore
