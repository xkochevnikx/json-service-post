import { getPostsisLoading } from './getIsLoading';

describe('getPostsIsLoading selector', () => {
    test('getPostsIsLoading', () => {
        const state = {
            posts: {
                isLoading: true,
            },
        };
        const result = getPostsisLoading(state);
        expect(result).toEqual(true);
    });
    test('isLoading undefined', () => {
        const state = {
            posts: {},
        };
        const result = getPostsisLoading(state);
        expect(result).toEqual(undefined);
    });
});
