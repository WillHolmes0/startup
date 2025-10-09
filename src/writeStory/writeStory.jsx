import React from 'react';
import './writeStory.css';

export function WriteStory() {
  return (
    <main className="write-story-main">
        <div className="write-story-center-container">
            <div className="write-story-subheader">
                <img src="../../public/Quill.png" width="50" alt="Quill icon"/>
                <h2>Create Your Story!</h2>
            </div>
            <div>
                <form>
                    <div className="write-story-title-box">
                        <h2>Title</h2>
                        <input type="text" placeholder="Enter your title"/>
                    </div>
                    <div className="write-story-summary-and-button">
                        <div className="write-story-summary-label">
                            <h2>Story Summary</h2>
                        </div>
                        <div className="write-story-post-story-button">
                            <button>Post</button>
                        </div>
                    </div>
                    <textarea className="write-story-textarea" placeholder="Enter a story summary or snippet"></textarea>
                </form>
            </div>
        </div>
    </main>
  );
}