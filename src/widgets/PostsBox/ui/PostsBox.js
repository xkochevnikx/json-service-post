import React from 'react';
import { PostsList } from '../../../features/PostsList/ui/PostsList';
import { SearchPosts } from '../../../features/SearchPosts/ui/SearchPosts';
import cls from './PostsBox.module.css';

export function PostsBox() {
    return (
        <div className={cls.PostsBox}>
            <div className={cls.PostsBoxWrapper}>
                <SearchPosts />
                <PostsList />
            </div>
        </div>
    );
}
