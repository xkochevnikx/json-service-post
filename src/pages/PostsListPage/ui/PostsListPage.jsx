import { useParams } from "react-router-dom";
import { PostBox } from "../../../widgets/PostBox/ui/PostBox";

export function PostsListPage() {

    const { id } = useParams();

    return (
        <PostBox listId={id}/>
    )
}