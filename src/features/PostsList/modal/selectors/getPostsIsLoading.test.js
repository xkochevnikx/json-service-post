describe('getPostsIsLoading selector', () => {
    test('getPostsIsLoading', () => {
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
});
