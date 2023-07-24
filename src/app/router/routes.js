import React from 'react';
import { PostsListPage } from '../../pages/PostsListPage/ui/PostsListPage';

export const routes = [
    { path: '/post/:id', component: <PostsListPage /> },
];
