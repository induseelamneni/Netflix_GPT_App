import { createSlice } from "@reduxjs/toolkit";


const eachMovieIdSlice = createSlice({
    name :"moviesIds",
    initialState:{
        movieId : null,
        posterMovie:null
    },
    reducers:{
        addMovieId : (state, action) => {
            state.movieId = action.payload
        },
        addPosterMovie:(state,action) =>{
            state.posterMovie= action.payload
        }
    }
})

export const { addMovieId,addPosterMovie}  = eachMovieIdSlice.actions
export default eachMovieIdSlice.reducer