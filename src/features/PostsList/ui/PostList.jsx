import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../modal/services/asyncfetchPosts";
import { usePosts } from "../../../shared/lib/hooks/usePosts";
import { PaginationList } from "../../../entities/PaginationList/PaginationList";
import { useSearchParams } from "react-router-dom";

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
        <>
            <h1>Feature PostList</h1>
            <h2>в фиче будет селект сверху и ниже сущность postList которой postItem</h2>
                {seachedPosts.slice((page - 1) * limit, page * limit).map((post) => (
                    <h2 key={post.id}>{post.id} {post.title}</h2>
                ))}
            <PaginationList changePage={changePage} 
                page={page} 
                totalPages={seachedPosts.length} 
                limit={limit}
                changePageForward={changePageForward}
                changePageBack={changePageBack}
            />
        </>
    );
};

