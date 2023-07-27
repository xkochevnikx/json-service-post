//корневой стор подключены слайсы фичи PostList и фичи SearchPosts которые изолируют в себе используемые данные
import { configureStore } from '@reduxjs/toolkit';
import { postsSliceReducer } from '../../features/PostsList/modal/slice/postsSlice';
import { searchSliceReducer } from '../../features/SearchPosts/modal/slice/searchSlice';

export default configureStore({
    reducer: {
        posts: postsSliceReducer,
        search: searchSliceReducer,
    },
});
