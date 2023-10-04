import React from "react";
import comments from "../../db/comments";

function Comments(props) {

    let commentsMaping = comments.map((comment) => {
        return (
            <div>
                <li>{comment.postId}</li>
                <li>{comment.id}</li>
                <li>{comment.name}</li>
                <li>{comment.email}</li>
                <li>{comment.body}</li>
            </div>
        )
    })

    return (
        <div>
            {commentsMaping}
        </div>
    )
}

export default Comments