import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        movie: {}
    },
    reducers: {
        addMovie: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { addMovie } = detailSlice.actions;

export const movieData = (state) => state.detail;

export default detailSlice.reducer;