import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../modal/services/asyncfetchPosts";
import { usePosts } from "../../../shared/lib/hooks/usePosts";

export const PostList = () => {

    const [limit, setLimit] = useState(10);

    const [page, setPage] = useState(1);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncfetchPosts({limit, page}));
    }, []);

    const posts = useSelector(state => state.posts.posts)

    const searchQuery = useSelector(state => state.search.text)
    
    const seachedPosts = usePosts(
        posts,
        searchQuery
      );



    // function changePage(p) {
    //     setPage(p);
    //   }

    return (
        <>
            <h1>Feature PostList</h1>
            <h2>в фиче будет селект сверху и ниже сущность postList которой postItem</h2>
            {seachedPosts.map((post) => (
                <h2 key={post.id}>{post.title}</h2>
            ))}
        </>
    );
};

