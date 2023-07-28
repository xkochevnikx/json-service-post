import { postsSliceReducer } from './postsSlice';

describe('postsSlise', () => {
    test('should return state when passed an empty action', () => {
        expect(postsSliceReducer(undefined, {})).toEqual({
            posts: [],
            isLoading: false,
            error: null,
        });
    });
});
