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
  const stories = React.useRef(null);
  const [storyIDs, setStoryIDs] = React.useState([]);

  React.useEffect(() => {
    getAllStories()
      .then((response) => {
        stories.current = response.stories;
        setStoryIDs(response.storyIDs);
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
    const res = await fetch('/api/stories', {
      method: 'GET',
      header: { 'Content-type': 'application/json'}
    });
    return await res.json();
  }

  function createAllStoryBlocks() {
    console.log(storyIDs.length);
    const storyBlocks = [];
    for (const storyID of storyIDs) {
      storyBlocks.push(<li><StoryBlock story={stories.current[storyID]} storyID={storyID} setActiveCommentsStoryID={setActiveCommentsStoryID}/></li>);
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
            <ViewCommentsComponent visible={viewCommentsVisibility} storyID={activeCommentsStoryID}/>
            <PostCommentSectionComponent visible={postCommentVisibility} storyID={activeCommentsStoryID}/>
        </aside>
    </main>
  );
}