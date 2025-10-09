import React from 'react';

export function CreateCommentSection() {
    return (
        <section className="feed-create-comment-section">
            <h3>Add a Comment</h3>
            <div className="feed-comment-option-select">
                <button>
                    <p>Type Comment</p>
                </button>
                <button>
                    <p>GIF</p>
                </button>
            </div>
            <section className="feed-scrollable">
            </section>
            <section className="feed-scrollable">
            </section>
        </section>
    );
}