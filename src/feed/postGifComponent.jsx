import React from 'react';
import './feed.css';

export function PostGifComponent({visible}) {
    if (visible) {
        return (
            <section className="feed-scrollable">
                <div>
                    <div className="feed-gif-comment">
                        <button>Post</button>
                        <div className="feed-comment-content-box">
                            <p>This is the place for the 3rd party API call</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return null;
}