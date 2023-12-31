import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '',
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
export const { reducer: searchSliceReducer } = searchSlice;
