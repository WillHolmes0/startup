import React from 'react';
import './feed.css';

export function WriteCommentComponent({visible}) {
    if (visible) {
        return (
            <section className="feed-scrollable">
                <form>
                    <div className="feed-typed-comment">
                        <button type="feed-submit">Post</button>
                        <div>
                            <textarea className="feed-textarea" placeholder="Enter a Comment"></textarea>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
    return null;
}
