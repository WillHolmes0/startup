import React from 'react';
import './feed.css';

export function Feed() {
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
                            <button>
                                <img src="../../public/thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="feed-comment-button">
                            <img src="../../public/comment.png" height ="25" alt="comment icon"/>
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
                                <img src="../../public/thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="feed-comment-button">
                            <img src="../../public/comment.png" height ="25" alt="comment icon"/>
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
                                <img src="../../public/thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="feed-comment-button">
                            <img src="../../public/comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <aside className="feed-aside">
            <nav className="feed-comment-navigation">
                <button>
                    <h5>View Comments</h5>
                </button>
                <button>
                    <h5>Write Comment</h5>
                </button>
            </nav>
            <section className="feed-comment-section">
                <h3 className="feed-comment-section-title">Comments</h3>
                <div className="feed-scrollable">
                    {/* Comments are retrieved from the database */}
                    <div className="feed-comment">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                        suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                        odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                        Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    </div>
                    <div className="feed-comment">
                        {/* gifs id will be stored in the database then refetched from the 3rd party when displaying in the comments */}
                        <img src="../../publifc/Jujutsu Kaisen Jjk GIF by Xbox.gif" className="sized-gif"/>
                    </div>
                </div>
            </section>
            <section className="feed-create-comment-section">
                <h3>Add a Comment</h3>
                <div className="feed-comment-option-select">
                    <button>
                        <p>Type Comment</p>
                    </button>
                    <button>
                        <p>GIF</p>
                    </button>
                </div>
                <section className="feed-scrollable">
                    <form>
                        <div className="feed-typed-comment">
                            <button type="feed-submit">Post</button>
                            <div>
                                <textarea className="feed-textarea" placeholder="Enter a Comment"></textarea>
                            </div>
                        </div>
                    </form>
                </section>
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
            </section>
        </aside>
    </main>
  );
}