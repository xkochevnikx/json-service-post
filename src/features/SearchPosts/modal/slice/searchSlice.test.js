import {
    searchSliceActions,
    searchSliceReducer,
} from './searchSlice';

describe('searchSlice.test', () => {
    test('search test', () => {
        const state = { text: '' };
        expect(
            searchSliceReducer(
                state,
                searchSliceActions.setText('Test')
            )
        ).toEqual({
            text: 'Test',
        });
    });
});
