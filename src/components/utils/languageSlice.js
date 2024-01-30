import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"language",
    initialState:{
        lang: "en"
    },
    reducers:{
        addLanguage : (state,action) => {
            state.lang = action.payload
        }
    }
})

export const {addLanguage} = languageSlice.actions

export default languageSlice.reducer