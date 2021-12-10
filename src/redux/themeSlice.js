import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text_color: 'white',
    bg_color: 'black'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        change: (state) => {
            if(state.bg_color === 'black'){
                state.bg_color = 'white';
                state.text_color = 'black';
                return state
            }
            if(state.bg_color === 'white'){
                state.bg_color = 'black';
                state.text_color = 'white';
                return state
            }
         }
    }
})

export const themeSelector = (state) => state.theme;
export const { change } = themeSlice.actions;
export default themeSlice.reducer;