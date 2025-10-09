import React from 'react';

export function WriteStory() {
  return (
    <main>
        <div className="center-container">
            <div className="write-page-subtitle">
                <img src="/Images/Quill.png" width="50" alt="Quill icon"/>
                <h2>Create Your Story!</h2>
            </div>
            <div>
                <form>
                    <div className="title-box">
                        <h2>Title</h2>
                        <input type="text" placeholder="Enter your title"/>
                    </div>
                    <div className="summary-and-button">
                        <div className="summary-label">
                            <h2>Story Summary</h2>
                        </div>
                        <div className="post-story-button">
                            <button>Post</button>
                        </div>
                    </div>
                    <textarea placeholder="Enter a story summary or snippet"></textarea>
                </form>
            </div>
        </div>
    </main>
  );
}