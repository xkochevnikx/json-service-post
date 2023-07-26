import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../modal/services/asyncfetchPosts";
import { usePosts } from "../../../shared/lib/hooks/usePosts";
import { PaginationList } from "../../../entities/PaginationList/PaginationList";
import { useSearchParams } from "react-router-dom";
import cls from "./PostsList.module.css";
import { MyLoader } from "../../../shared/ui/MyLoader/MyLoader";

/**
 * Фича, содержит в себе логику отображения данных 
 * @PostsList
 */

export function PostsList () {

    const [selectedSort, setSelectedSort] = useState(false);

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(1);

    const [paramsSearch, setParamsSearch] = useSearchParams();

    const dispatch = useDispatch();

    //при первом рендере дергаю запрос 
    useEffect(() => {
        dispatch(asyncfetchPosts());
    }, [dispatch]);

    //вывожу номер страницы в адресную строку
    useEffect(() => {
          setParamsSearch({
            q: page,
          }); 
     }, [page, setParamsSearch]);

    const posts = useSelector(state => state.posts.posts);

    const isLoading = useSelector(state => state.posts.isLoading);

    //результат поискового запроса достаю из слайса фичи SearchPost
    const searchQuery = useSelector(state => state.search.text);
    
    //хук возвращает отсортирванные и отфильтрованные посты, на вход принимает строку из фичи SearchPosts, флаг о необходимости сортировки по длинне тела поста и изначальный массив от сервера
    const seachedPosts = usePosts(
        posts,
        searchQuery,
        selectedSort
    );

    function changePage(p) {
        setPage(p);
    };

    function changePageForward(p) {
        if(page < limit) setPage(p => p + 1);
    };

    function changePageBack(p) {
        if(page > 1) setPage(p => p - 1);
    };

    function changeSort() {
        setSelectedSort(selectedSort => !selectedSort)
    };

    //пока загрузка показываю крутилку
    if(isLoading) {
        return (
            <div className={cls.loaderBox}>
                <MyLoader/>
            </div>
        )
    };

    return (
        <div className={cls.PostsListBox}>
            <div className={cls.sortBox}>
                <div className={cls.sortBoxItem}>ID <span className={cls.icon}>˅</span> </div>
                <div className={cls.sortBoxItem}>Заголовок <span className={cls.icon}>˅</span> </div>
                <div 
                    onClick={changeSort}
                    className={cls.sortBoxItem}>Описание <span className={cls.icon}>˅</span> </div>
            </div>
            <div className={cls.gridContainer}>
                {seachedPosts.slice((page - 1) * limit, page * limit).map((post) => (
                     <div key={post.id}
                     className={cls.container}>
                     <div className={cls.item_id}>{post.id}</div>
                     <div className={cls.item}>{post.title}</div>
                     <div className={cls.item}>{post.body}</div>
                 </div>
                ))}
            </div>
            <PaginationList 
                className={cls.PaginationList}
                changePage={changePage} 
                page={page} 
                totalCount={seachedPosts.length} 
                limit={limit}
                changePageForward={changePageForward}
                changePageBack={changePageBack}
            />
        </div>
    );
};

