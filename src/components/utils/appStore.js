import {configureStore} from "@reduxjs/toolkit"
import userSlice  from "./userSlice"
import movieSlice from "./movieSlice"
import gptSearchSlice from "./gptSearchSlice"
import languageSlice from "./languageSlice"

const appStore = configureStore({
    reducer:{
       user:userSlice,
       movies:movieSlice,
       gptSearch :gptSearchSlice,
       language: languageSlice
    }

})

export default appStore
