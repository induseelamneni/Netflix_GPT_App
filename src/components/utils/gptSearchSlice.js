import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gptSearch",
    initialState: {
        search : false,
        movieResults :null,
        movieNames:null
    },

    reducers:{
         searchBtn :(state,action) =>  {
            state.search = !state.search
        },
        addGptMovieResults:(state,action) => {
            const {movieNames , movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }

        
    }


})

export const {searchBtn, addGptMovieResults} = gptSearchSlice.actions

export default  gptSearchSlice.reducer
