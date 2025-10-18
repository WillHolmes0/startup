import React from 'react';
import { useEffect } from 'react';
import './feed.css';
import { ViewCommentsComponent } from './viewCommentsComponent.jsx';
import { PostCommentSectionComponent } from './postCommentSectionComponent.jsx';
import { StoryBlock } from './storyBlock.jsx';

export function Feed() {
    let storyList = JSON.parse(localStorage.getItem('storyIDs') || '[]');
  const [viewCommentsVisibility, setViewCommentsVisibility] = React.useState(true);
  const [postCommentVisibility, setPostCommentVisibility] = React.useState(false);
  const [activeCommentsStoryID, setActiveCommentsStoryID] = React.useState(storyList[0]);

  useEffect(() => {
    if (storyList == null) {
      console.log("storyList is null");
    }
    else if (storyList.length > 0) {
      console.log("loaded stories: \n")
      for (let i = 0; i < storyList.length; i++) {
        console.log(`\t${storyList[i]}`);
      }
    } else if (storyList.length == 0) {
      console.log("storyList is empty");
    } else {
      console.log("error with storyList");
    }
  }, [storyList]);

  function activateViewCommentsVisibility() {
    setViewCommentsVisibility(true);
    setPostCommentVisibility(false);
  }

  function activatePostCommentVisibility() {
    setPostCommentVisibility(true);
    setViewCommentsVisibility(false);
  }

  function listAllStoryBlocks() {
    const stories = [];
    for (let i = 0; i < storyList.length; i++) {
        stories.push(<li><StoryBlock storyID={storyList[i]} setActiveCommentsStoryID={setActiveCommentsStoryID}/></li>);
    }
    return <ol>{stories}</ol>
  }

  return (
    <main className="feed-main">
        <section className="feed-primary-section">
            <ol className='feed-box'>{listAllStoryBlocks()}</ol>
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