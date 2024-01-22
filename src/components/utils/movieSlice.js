import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        movieId : null
    },
    reducers : {
        addMovies : (state,action) => {
            state.nowPlayingMovies = action.payload

        },
        addMovieId : (state,action) => {
            state.movieId = action.payload
        }
    }

})

export const {addMovies,addMovieId}  = movieSlice.actions

export  default movieSlice.reducer