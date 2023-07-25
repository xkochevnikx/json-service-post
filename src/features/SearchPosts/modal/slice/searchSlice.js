import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '',
    error: '',
};

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { actions: searchSliceActions } = searchSlice;
export default searchSlice.reducer;
