import React from 'react';
import './feed.css';
import { WriteCommentComponent } from './writeCommentComponent.jsx';
import { PostGifComponent } from './postGifComponent.jsx';

export function PostCommentSectionComponent(props) {
    const [writeCommentVisibility, setWriteCommentVisibility] = React.useState(true);
    const [postGifVisibility, setPostGifVisibility] = React.useState(false);

    function activateWriteCommentVisibility() {
        setWriteCommentVisibility(true);
        setPostGifVisibility(false);
    }

    function activatePostGifVisibility() {
        setPostGifVisibility(true);
        setWriteCommentVisibility(false);
    }

    if (props.visible) {
        return (
            <section className="feed-create-comment-section">
                <h3>Add a Comment</h3>
                <div className="feed-comment-option-select">
                    <button onClick={activateWriteCommentVisibility}>
                        <p>Type Comment</p>
                    </button>
                    <button onClick={activatePostGifVisibility}>
                        <p>GIF</p>
                    </button>
                </div>
                <WriteCommentComponent visible={writeCommentVisibility} storyID={props.storyID}/>
                <PostGifComponent visible={postGifVisibility} storyID={props.storyID}/>
            </section>
        );
    }
    return null;
}