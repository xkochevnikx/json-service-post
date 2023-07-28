import { getSearchQuery } from './getSearchQuery';

describe('getSearchQuery selector', () => {
    test('getSearchQuery', () => {
        const text = 'test';

        const state = {
            search: {
                text,
            },
        };
        const result = getSearchQuery(state);
        expect(result).toEqual(text);
    });

    test('getSearchQuery undefined', () => {
        const state = {
            search: {},
        };
        const result = getSearchQuery(state);
        expect(result).toEqual(undefined);
    });
});
