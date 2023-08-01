import { buildSelector } from '../../../../shared/lib/store/buildSelector';

export const [useGetPosts, getPosts] = buildSelector(
    (state) => state.posts.posts
);
