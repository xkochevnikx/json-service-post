import React from 'react';
import { PostList } from '../../../features/PostsList/ui/PostList';
import { SearchPosts } from '../../../features/SearchPosts/ui/SearchPosts';

export const PostBox = () => {

    return (
        <>
          <SearchPosts/>
          <PostList/>
        </>
        
    );
};

