import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gptSearch",
    initialState: {
        search : false,
    },

    reducers:{
         searchBtn :(state,action) =>  {
            state.search = !state.search
        }

        
    }


})

export const {searchBtn} = gptSearchSlice.actions

export default  gptSearchSlice.reducer
