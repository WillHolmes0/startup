import React from 'react';
import './feed.css';

export function WriteCommentComponent(props) {
    let story = JSON.parse(localStorage.getItem(props.storyID))
    let text = '';

    function postComment() {
        story.comments.push(text);
        localStorage.setItem(props.storyID, JSON.stringify(story));
    }

    function setContent(e) {
        text = e.target.value;
    }

    if (props.visible) {
        return (
            <section className="feed-scrollable">
                <div>
                    <div className="feed-typed-comment">
                        <button onClick={postComment} type="feed-submit">Post</button>
                        <div>
                            <textarea onChange={setContent} className="feed-textarea" placeholder="Enter a Comment"></textarea>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return null;
}
