import React from 'react';
import { useEffect, useRef } from 'react';
import './feed.css';
import { ViewCommentsComponent } from './viewCommentsComponent.jsx';
import { PostCommentSectionComponent } from './postCommentSectionComponent.jsx';
import { StoryBlock } from './storyBlock.jsx';

export function Feed() {
  const [viewCommentsVisibility, setViewCommentsVisibility] = React.useState(true);
  const [postCommentVisibility, setPostCommentVisibility] = React.useState(false);
  const [activeCommentsStoryID, setActiveCommentsStoryID] = React.useState(null);
  const storyIDs = React.useRef([]);
  const [stories, setStories] = React.useState({});

  React.useEffect(() => {
    getAllIDs()
      .then(() => {
        console.log(storyIDs.current);
        getAllStories();
      });
  }, []);

  function activateViewCommentsVisibility() {
    setViewCommentsVisibility(true);
    setPostCommentVisibility(false);
  }

  function activatePostCommentVisibility() {
    setPostCommentVisibility(true);
    setViewCommentsVisibility(false);
  }

  async function getAllStories() {
    const retrievedStories = {};
    for (const id of storyIDs.current) {
      const res = await fetch(`/api/story?storyID=${id}`);
      const parsedStory = await res.json();
      retrievedStories[id] = parsedStory;
    }
    setStories(retrievedStories);
  }

  async function getAllIDs() {
    const res = await fetch('/api/storyKeys');
    const parsedResult = await res.json();
    storyIDs.current = parsedResult.storyIDs;
  }

  function createAllStoryBlocks() {
    const storyBlocks = [];
    if (stories == null) {return}
    for (let i = 0; i < storyIDs.current.length; i++) {
      const storyID = storyIDs.current[i];
      storyBlocks.push(<li><StoryBlock story={stories[storyID].story} storyID={storyID} setActiveCommentsStoryID={setActiveCommentsStoryID}/></li>);
    }
    return storyBlocks;
  }

  return (
    <main className="feed-main">
        <section className="feed-primary-section">
            <ol className='feed-box'>{createAllStoryBlocks()}</ol>
        </section>
        <aside className="feed-aside">
            <nav className="feed-comment-navigation">
                <button onClick={activateViewCommentsVisibility}>
                    <h5>View Comments</h5>
                </button>
                <button onClick={activatePostCommentVisibility}>
                    <h5>Post Comment</h5>
                </button>    
            </nav>
            {/* <ViewCommentsComponent visible={viewCommentsVisibility} storyID={activeCommentsStoryID}/> */}
            <PostCommentSectionComponent visible={postCommentVisibility} storyID={activeCommentsStoryID}/>
        </aside>
    </main>
  );
}