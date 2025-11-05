import React from 'react';
import './feed.css';

export function WriteCommentComponent(props) {
    let story = JSON.parse(localStorage.getItem(props.storyID))
    let comment = {};

    async function postComment() {
        if (story) {
            comment.type = "text";
            await fetch('/api/comments', {
                method: 'PUT',
                header: {'Content-type': 'application/json'},
                body: JSON.stringify(comment)
            });
        }
    }

    function setContent(e) {
        comment.content = e.target.value;
    }

    if (props.visible) {
        return (
            <section className="feed-scrollable">
                <button onClick={postComment} className="post-comment-button">Post</button>
                <div className="feed-comment-input">
                    <textarea onChange={setContent} className="feed-textarea" placeholder="Enter a Comment"></textarea>
                </div>
            </section>
        );
    }
    return null;
}
