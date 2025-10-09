import React from 'react';

export function PostComment() {
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