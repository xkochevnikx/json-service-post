import { useMemo } from 'react';

function useSortedPosts(
    posts,
    selectedSort,
    selectedTitleSort,
    idSort
) {
    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort(
                (a, b) => b.body.length - a.body.length
            );
        }
        if (selectedTitleSort) {
            return [...posts].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }
        if (idSort) {
            return [...posts].sort((a, b) => b.id - a.id);
        }
        return posts;
    }, [selectedSort, posts, selectedTitleSort, idSort]);

    return sortedPosts;
}

/**
 * Хук, осуществляет cортировку и фильтрацию данных по поисковому запросу и флагу
 * @posts - массив постов
 * @searchQuery - поисковая строка
 * @selectedSort - флаг о необходимости фильтрации
 * @selectedTitleSort - флаг о необходимости сортировки по алфавиту полей title
 * @idSort - флаг о необходимости сортировки по id
 */

export function usePosts(
    posts,
    searchQuery,
    selectedSort,
    selectedTitleSort,
    idSort
) {
    const sortedPosts = useSortedPosts(
        posts,
        selectedSort,
        selectedTitleSort,
        idSort
    );
    const seachedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery)
        );
    }, [searchQuery, sortedPosts]);

    return seachedPosts;
}
