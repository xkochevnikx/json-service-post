import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../../features/PostsList/modal/slice/postsSlice';

export default configureStore({
    reducer: {
        posts: postsSlice,
    },
});
