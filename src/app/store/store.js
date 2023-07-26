//корневой стор подключены слайсы фичи PostList и фичи SearchPosts которые изолируют в себе используемые данные
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../../features/PostsList/modal/slice/postsSlice';
import searchSlice from '../../features/SearchPosts/modal/slice/searchSlice';

export default configureStore({
    reducer: {
        posts: postsSlice,
        search: searchSlice,
    },
});
