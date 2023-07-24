import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../../widgets/PostsCardBox/modal/slice/postsSlice';

export default configureStore({
    reducer: {
        posts: postsSlice,
    },
});
