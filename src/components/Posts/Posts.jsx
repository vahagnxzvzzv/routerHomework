import React from "react";
import posts from "../../db/posts";

function Posts(props) {

    let postsMaping =  posts.map((post) => {
        return (
            <div>
                <li>{post.userId}</li>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </div>
        )
    })

    return (
        <div className="">
            {postsMaping}
        </div>
    )
}

export default Posts