import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncfetchPosts } from "../../../widgets/PostsCardBox/modal/services/asyncfetchPosts";

export function PostsListPage() {

    const dispatch = useDispatch()

     useEffect(() => {
        dispatch(asyncfetchPosts());
    }, []);

    return (
        <h2>qwerty</h2>
    )
}