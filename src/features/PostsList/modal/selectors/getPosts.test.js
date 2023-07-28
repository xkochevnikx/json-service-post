import { getPosts } from './getPosts';

describe('getPosts selector', () => {
    test('getPosts data', () => {
        const posts = [
            { id: 1, title: 'test', body: 'test' },
        ];
        const state = {
            posts: {
                posts,
            },
        };
        const result = getPosts(state);
        expect(result).toEqual(posts);
    });

    test('getPost data undefined', () => {
        const state = {
            posts: {},
        };
        const result = getPosts(state);
        expect(result).toEqual(undefined);
    });
});
