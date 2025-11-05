import React from 'react';
import './feed.css';
import { useEffect } from 'react';

export function StoryBlock(props) {

    let story = props.story;
    const [likeCount, setLikeCount] = React.useState(story.likes);
    
    function updateLikeCount() {
        let newLikeCount = likeCount + 1;
        story.likes = newLikeCount;
        localStorage.setItem(props.storyID, JSON.stringify(story));
        setLikeCount(newLikeCount);
    }

    function setStoryComments() {
        props.setActiveCommentsStoryID(props.storyID);
    }

    return (
        <div className="feed-story-box">
            <h4>{story.title}</h4>
            <p>{story.content}</p>
            <div className="feed-story-likes-comments">
                <div className="feed-like-section">
                    <button onClick={updateLikeCount}>
                        <img src="thumbs_up.png" height="30" alt="thumbs up icon"/>
                        {/* The "Like" button here is the web socket */}
                    </button>
                    <h4>{likeCount}</h4>
                </div>
                <button onClick={setStoryComments} className="feed-comment-button">
                    <img src="comment.png" height ="25" alt="comment icon"/>
                </button>
            </div>
        </div>
    );
}