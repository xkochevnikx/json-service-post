import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../modal/services/asyncfetchPosts";

export const PostList = (props) => {

    const { listId } = props; 

    const posts = useSelector(state => state.posts.posts)
    console.log(posts);
 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncfetchPosts(listId));
    }, [listId]);

    return (
        <>
            <h1>Feature PostList</h1>
            <h2>в фиче будет селект сверху и ниже сущность postList которой postItem</h2>
        </>
    );
};

