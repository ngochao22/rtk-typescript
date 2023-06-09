import React from "react";
import CreatePost from "../components/createPost/CreatePost";
import PostList from "../components/postList/PostList";

const Blog: React.FC = () => {
    return (
        <div className="p-5">
            <CreatePost></CreatePost>
            <PostList></PostList>
        </div>
    );
};

export default Blog;
