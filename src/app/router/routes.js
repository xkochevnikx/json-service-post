//что бы не хардкодить в корневом роуте тут можно в случае необходимости добавить роутов
import React from 'react';
import { PostsListPage } from '../../pages/PostsListPage/ui/PostsListPage';

export const routes = [
    { path: '/', component: <PostsListPage /> },
];
