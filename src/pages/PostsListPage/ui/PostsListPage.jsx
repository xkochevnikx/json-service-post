import { PostsBox } from "../../../widgets/PostsBox/ui/PostsBox";
import cls from "./PostsListPage.module.css"

export function PostsListPage() {
    return (
        <div className={cls.PostsListPage}>
            <PostsBox/>
        </div>
    )
};