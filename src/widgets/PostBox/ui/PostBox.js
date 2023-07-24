import React from 'react';
import { PostList } from '../../../features/PostsList/ui/PostList';

export const PostBox = (props) => {

    const { listId } = props; 

    return (
        <>
            <h1>PostBox</h1>
            <PostList listId={listId}/>
        </>
    );
};

