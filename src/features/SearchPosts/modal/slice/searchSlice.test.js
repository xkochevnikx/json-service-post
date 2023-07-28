import {
    searchSliceActions,
    searchSliceReducer,
} from './searchSlice';

describe('searchSlice.test', () => {
    test('should return state when passed an empty action', () => {
        expect(searchSliceReducer(undefined, {})).toEqual({
            text: '',
            error: '',
        });
    });

    test('search test action', () => {
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
