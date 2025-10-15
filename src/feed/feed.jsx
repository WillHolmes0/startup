import React from 'react';
import './feed.css';
import { ViewCommentsComponent } from './viewCommentsComponent.jsx';
import { PostCommentSectionComponent } from './postCommentSectionComponent.jsx';

export function Feed() {
  const [likeCount, setLikeCount] = React.useState(0);
  const [viewCommentsVisibility, setViewCommentsVisibility] = React.useState(true);
  const [postCommentVisibility, setPostCommentVisibility] = React.useState(false);

  function updateLikeCount() {
    setLikeCount(likeCount + 1);
  }

  function activateViewCommentsVisibility() {
    setViewCommentsVisibility(true);
    setPostCommentVisibility(false);
  }

  function activatePostCommentVisibility() {
    setPostCommentVisibility(true);
    setViewCommentsVisibility(false);
  }

  return (
    <main className="feed-main">
        <section className="feed-primary-section">
            <div className="feed-box">
                <div className="feed-story-box">
                    {/* This would be retrieved from the database */}
                    <h4>Story 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    <div className="feed-story-likes-comments">
                        <div className="feed-like-section">
                            <button onClick={updateLikeCount}>
                                <img src="thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>{likeCount}</h4>
                        </div>
                        <button className="feed-comment-button">
                            <img src="comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
                <div className="feed-story-box">
                    {/* <This would be retrieved from the database */}
                    <h4>Story 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    <div className="feed-story-likes-comments">
                        <div className="feed-like-section">
                            <button>
                                <img src="thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="feed-comment-button">
                            <img src="comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
                <div className="feed-story-box">
                    {/* This would be retrieved from the database */}
                    <h4>Story 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    <div className="feed-story-likes-comments">
                        <div className="feed-like-section">
                            <button>
                                <img src="thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="feed-comment-button">
                            <img src="comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
            </div>
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
            <ViewCommentsComponent visible={viewCommentsVisibility}/>
            <PostCommentSectionComponent visible={postCommentVisibility}/>
        </aside>
    </main>
  );
}