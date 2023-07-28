import { asyncfetchPosts } from './asyncfetchPosts';
import axios from 'axios';

jest.mock('axios');

describe('asyncfetchPosts', () => {
    test('fetch', async () => {
        const posts = [
            { id: 1, title: 'test', body: 'test' },
        ];

        const dispatch = jest.fn();

        const thunk = asyncfetchPosts();

        await thunk(dispatch);

        const { calls } = dispatch.mock;

        expect(calls).toHaveLength(2);

        const [start, end] = calls;

        expect(start[0].type).toBe(
            'posts/asyncfetchPosts/pending'
        );

        expect(end[0].type).toBe(
            asyncfetchPosts.fulfilled().type
        );

        // expect(end[0].payload).toBe(posts);
    });
});
