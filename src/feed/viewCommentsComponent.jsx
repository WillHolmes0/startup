import './feed.css';
import React from 'react';

  export function ViewCommentsComponent(props) {
    const story = JSON.parse(localStorage.getItem(props.storyID));
    
    function showStoryComments() {
        const comments = [];
        for (let i = 0; i < story.comments.length; i++) {
            comments.push(<li className="feed-comment">{story.comments[i]}</li>);
        }
        return comments;
    }

    if (props.visible) {
        return (
            <section className="feed-comment-section">
                <h3 className="feed-comment-section-title">Comments</h3>
                <div className="feed-scrollable">
                    {showStoryComments()}
                    <div className="feed-comment">
                        {/* gifs id will be stored in the database then refetched from the 3rd party when displaying in the comments */}
                        <img src="Jujutsu Kaisen Jjk GIF by Xbox.gif" className="feed-sized-gif"/>
                    </div>
                </div>
            </section>
        );
    }
    return null;
  }