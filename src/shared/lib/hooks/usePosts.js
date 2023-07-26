import { useMemo } from "react";


function useSortedPosts(posts, selectedSort) {
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => b.body.length - a.body.length);
    }
    return posts;
  }, [selectedSort, posts]);

  return sortedPosts;
}

/**
 * Хук, осуществляет cортировку и фильтрацию данных по поисковому запросу и флагу
 * @posts - массив постов
 * @searchQuery - поисковая строка
 * @selectedSort - флаг о необходимости фильтрации
 */

export function usePosts (posts, searchQuery, selectedSort) {
  const sortedPosts = useSortedPosts(posts, selectedSort);
  const seachedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  return seachedPosts;
};
