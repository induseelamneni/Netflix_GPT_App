import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState : {
        nowPlayingMovies : null,
        movieId : null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null
    },
    reducers : {
        addMovies : (state,action) => {
            state.nowPlayingMovies = action.payload

        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action) => {
            state.topRatedMovies= action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.upComingMovies = action.payload

        },
        addMovieId : (state,action) => {
            state.movieId = action.payload
        },
        
    }

})

export const {addMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addMovieId}  = movieSlice.actions

export  default movieSlice.reducer