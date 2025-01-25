import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

export default function PostContainer(){
    return(
        <div className="post-container">
            <PostTitle postTitle={"Post title"} />
            <PostBody postContext={"Post body"} />
        </div>
    );
}