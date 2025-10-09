import React from 'react';

export function PostGIF() {
    return (
        <section className="feed-scrollable">
            <form>
                <div className="feed-gif-comment">
                    <button>Post</button>
                    <div className="feed-comment-content-box">
                        {/* Area to select a GIF */}
                        {/* THIS IS THE 3RD PARTY CALL */}
                        <p>GIF selection</p>
                    </div>
                </div>
            </form>
        </section>
    );
}