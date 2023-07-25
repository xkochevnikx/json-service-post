import { useMemo } from "react";

/**
 * Хук, осуществляет фильтрацию данных по поисковому запросу
 * @posts массив постов
 * @searchQuery поисковая строка 
 */

export const usePosts = (posts, searchQuery) => {
  const seachedPosts = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, posts]);

  return seachedPosts;
};
