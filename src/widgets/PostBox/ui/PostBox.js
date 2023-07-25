import React from 'react';
import { PostList } from '../../../features/PostsList/ui/PostList';
import { SearchPosts } from '../../../features/SearchPosts/ui/SearchPosts';
import cls from "./PostBox.module.css"

export function PostBox () {

    return (
        <div className={cls.PostBox}>
            <SearchPosts/>
            <PostList/>
        </div>
    );
};

