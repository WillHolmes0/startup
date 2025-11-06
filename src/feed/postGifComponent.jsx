import React from 'react';
import './feed.css';
import { useEffect } from 'react';

export function PostGifComponent(props) {
    const [gifList, setGifList] = React.useState([]);
    const [selectedGif, setSelectedGif] = React.useState();
    const searchTerms = React.useRef(null);
    const tenorApiKey = 'AIzaSyAvavIKC3XXYRPaMUhnEoHPLMMEb3sA9aQ';
    
    async function getGifList() {
        const newGifList = [];
        const res = await fetch(`https://tenor.googleapis.com/v2/search?key=${tenorApiKey}&q=${searchTerms}&limit=5`);
        const parsedResponse = await res.json();
        for (let i = 0; i < parsedResponse.results.length; i++) {
            const gifUrl = `https://tenor.com/view/jujutsu-kaisen-nanami-gif-${parsedResponse.results[i].id}.gif`
            newGifList.push(gifUrl);
        }
        setGifList(newGifList);
    }
    
    async function postGif() {
        if (props.storyID) {
            const comment = {type: "gif", content: selectedGif};
            await fetch('/api/comments', {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({comment: comment, storyID: props.storyID})
            });
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

    function setSearchTerms(e) {
        searchTerms.current = e.target.value;
    }

    if (props.visible) {
        return (
            <section className="feed-scrollable">
                <input onChange={setSearchTerms} type="text" placeholder="search Gifs" className="feed-gif-search-box"/>
                <div className="feed-gif-buttons">               
                    <button onClick={getGifList} className="feed-gif-search-button">Search</button>
                    <button onClick={postGif} className="post-comment-button">Post</button>
                </div>
                <div className="feed-comment-input">
                    {allGifOptions()}
                </div>
            </section>
        );
    }
    return null;
}