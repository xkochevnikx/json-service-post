import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../modal/services/asyncfetchPosts";
import { usePosts } from "../../../shared/lib/hooks/usePosts";
import { PaginationList } from "../../../entities/PaginationList/PaginationList";
import { useSearchParams } from "react-router-dom";
import cls from "./PostList.module.css"

export const PostList = () => {

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(1);

    const [_, setParamsSearch] = useSearchParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncfetchPosts());
    }, []);

    useEffect(() => {
          setParamsSearch({
            q: page,
          }); 
     }, [page]);

    const posts = useSelector(state => state.posts.posts)

    const searchQuery = useSelector(state => state.search.text)
    
    const seachedPosts = usePosts(
        posts,
        searchQuery
    );
    console.log(seachedPosts);

    function changePage(p) {
        setPage(p);
    };

    function changePageForward(p) {
        setPage(p => p + 1);
    };

    function changePageBack(p) {
        setPage(p => p - 1);
    };

    return (
        <div>
            <div className={cls.sortBox}>
                <div className={cls.item}></div>
                <div className={cls.item}></div>
                <div className={cls.item}></div>
            </div>
                {seachedPosts.slice((page - 1) * limit, page * limit).map((post) => (
                     <div className={cls.container}>
                     <div className={cls.item}>{post.id}</div>
                     <div className={cls.item}>{post.title}</div>
                     <div className={cls.item}>{post.body}</div>
                 </div>
                ))}
            <PaginationList changePage={changePage} 
                page={page} 
                totalPages={seachedPosts.length} 
                limit={limit}
                changePageForward={changePageForward}
                changePageBack={changePageBack}
            />
        </div>
    );
};

