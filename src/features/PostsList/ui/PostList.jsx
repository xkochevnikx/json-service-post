import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../modal/services/asyncfetchPosts";

export const PostList = () => {

    const [postList, setPostList] = useState();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncfetchPosts());
    }, []);

    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        setPostList(posts)
    },[posts])


    return (
        <>
            <h1>Feature PostList</h1>
            <h2>в фиче будет селект сверху и ниже сущность postList которой postItem</h2>
        </>
    );
};

