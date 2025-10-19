import React from 'react';
import './feed.css';
import { useEffect } from 'react';

export function PostGifComponent(props) {
    const [gifList, setGifList] = React.useState([]);
    const [selectedGif, setSelectedGif] = React.useState();
    let story = JSON.parse(localStorage.getItem(props.storyID))
    
    useEffect(() => {
        getGifList();
    }, []);
    
    function getGifList() {
        const tempGifList = ["Jujutsu Kaisen Jjk GIF by Xbox.gif", "thumbs_up.png"];
        const newGifList = [];
        for (let i = 0; i < tempGifList.length; i++) {
            newGifList.push(tempGifList[i]);
        }
        setGifList(newGifList);
    }
    
    function postGif() {
        let comment = {};
        if (selectedGif) {
            if (story) {
                comment.type = "gif";
                comment.content = selectedGif;
                story.comments.push(comment);
                localStorage.setItem(props.storyID, JSON.stringify(story));
            }
        }   
    }

    function allGifOptions() {
        const renderableGifs = [];
        for (let i = 0; i < gifList.length; i++) {
            if (gifList[i] == selectedGif) {
                renderableGifs.push(<img onClick={() => setSelectedGif(gifList[i])} src={gifList[i]} className="feed-gif-option-selected"/>)
            } else {
                renderableGifs.push(<img onClick={() => setSelectedGif(gifList[i])} src={gifList[i]} className="feed-gif-option-not-selected"/>)
            }
        }
        return (renderableGifs);
    }

    if (props.visible) {
        return (
            <section className="feed-scrollable">
                <button onClick={postGif} className="post-comment-button">Post</button>
                <div className="feed-comment-input">
                    {allGifOptions()}
                </div>
            </section>
        );
    }
    return null;
}