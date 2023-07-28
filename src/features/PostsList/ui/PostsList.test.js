import { render } from '@testing-library/react';
import { PostsList } from './PostsList';
import * as reduxHooks from 'react-redux';
import { PostsListPage } from '../../../pages/PostsListPage/ui/PostsListPage';

jest.mock('react-redux');

describe('PstsList', () => {
    test('should create PostsList with empty posts', () => {
        jest.spyOn(
            reduxHooks,
            'useSelector'
        ).mockReturnValue([]);

        const component = render(<PostsListPage />);

        expect(component).toMatchSnapshot();
    });
});
