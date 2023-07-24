import { createSlice } from '@reduxjs/toolkit';
import { asyncfetchPosts } from '../services/asyncfetchPosts';

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
        
    },
    extraReducers: {
        [asyncfetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [asyncfetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        [asyncfetchPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { actions: postsActions } = postsSlice;
export default postsSlice.reducer;
