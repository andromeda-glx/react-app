import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

export default function PostContainer({ postTitle, postBody }) {
    return (
        <li className="post-container">
            <PostTitle postTitle={postTitle} />
            <PostBody postBody={postBody} />
        </li>
    );
}