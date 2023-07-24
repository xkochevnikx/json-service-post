import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncfetchPosts } from "../../../widgets/PostsCardBox/modal/services/asyncfetchPosts";

export function PostsListPage() {


    const dispatch = useDispatch()

     useEffect(() => {
        dispatch(asyncfetchPosts());
    }, []);

    const posts = useSelector(state => state.posts.posts)
    console.log(posts);

    return (
        <h2>qwerty</h2>
    )
}