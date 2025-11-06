import './feed.css';
import React from 'react';

  export function ViewCommentsComponent(props) {
    let story = React.useRef(null);

    React.useEffect(() => {
        story = getStory()
    });

    async function getStory() {
        const res = await fetch('/api/stories', {
            method: 'GET',
            headers: {'content-type': 'application/json'},
            body: {}
        })
    }
    
    function showStoryComments() {
        if (story != null) {
            const comments = [];
            for (let i = 0; i < story.comments.length; i++) {
                let comment = story.comments[i];
                if (comment.type == "text") {
                    comments.push(<li className="feed-comment">{comment.content}</li>);
                } else if (comment.type == "gif") {
                    comments.push(<li className="feed-comment">{<img src={comment.content} className="feed-sized-gif"/>}</li>);
                } else {
                    console.log("error: unknown comment type.");
                }
            }
            return comments;
        }   
    }

    if (props.visible) {
        return (
            <section className="feed-comment-section">
                <h3 className="feed-comment-section-title">Comments</h3>
                <div className="feed-scrollable">
                    {showStoryComments()}
                </div>
            </section>
        );
    }
    return null;
  }