import React from 'react';
import './writeStory.css';
import {getAllKeys} from '../dataAccess/localAccess.jsx';
import {useEffect} from 'react';


export function WriteStory() {
    const story = {};

    // function updateStoryIDs(storyID) {
    //     const storyIDs = JSON.parse(localStorage.getItem('storyIDs') || '[]');
    //     storyIDs.push(storyID);
    //     localStorage.setItem('storyIDs', JSON.stringify(storyIDs));
    //     return storyIDs;
    // }

    function generateID() {
        let idNumber = Math.round(Math.random() * 10000)
        let idKey = "story" + idNumber.toString();
        let dataKeys = getAllKeys();
        if (!(idKey in dataKeys)) {
            return idKey;
        }
        return generateID();
    }

    async function postStory() {
        story.likes = 0;
        story.comments = [];
        let idKey = generateID();
        console.log(idKey);
        const res = await fetch('/api/story', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({idKey, story})
        });
        const result = await res.json();
        console.log(result);
    }

    function setTitle(e) {
        story.title = e.target.value;
    }

    function setContent(e) {
        story.content = e.target.value;
    }

    return (
        <main className="write-story-main">
            <div className="write-story-center-container">
                <div className="write-story-subheader">
                    <img src="Quill.png" width="50" alt="Quill icon"/>
                    <h2>Create Your Story!</h2>
                </div>
                <div>
                    <div>
                        <div className="write-story-title-box">
                            <h2>Title</h2>
                            <input onChange={setTitle} type="text" placeholder="Enter your title"/>
                        </div>
                        <div className="write-story-summary-and-button">
                            <div className="write-story-summary-label">
                                <h2>Story Summary</h2>
                            </div>
                            <div className="write-story-post-story-button">
                                <button onClick={postStory}>Post</button>
                            </div>
                        </div>
                        <textarea onChange={setContent} className="write-story-textarea" placeholder="Enter a story summary or snippet"></textarea>
                    </div>
                </div>
            </div>
        </main>
    );
}