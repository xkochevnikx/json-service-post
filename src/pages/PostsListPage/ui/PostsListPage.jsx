import { PostBox } from "../../../widgets/PostBox/ui/PostBox";
import cls from "./PostsListPage.module.css"

export function PostsListPage() {
    return (
        <div className={cls.PostsListPage}>
            <PostBox/>
        </div>
    )
}