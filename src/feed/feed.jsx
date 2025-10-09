import React from 'react';

export function Feed() {
  return (
    <main>
        <section className="primary-section">
            <div className="feed-box">
                <div className="story-box">
                    {/* This would be retrieved from the database */}
                    <h4>Story 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    <div className="story-likes-comments">
                        <div className="like-section">
                            <button>
                                <img src="/Images/thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="comment-button">
                            <img src="/Images/comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
                <div className="story-box">
                    {/* <This would be retrieved from the database */}
                    <h4>Story 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    <div className="story-likes-comments">
                        <div className="like-section">
                            <button>
                                <img src="/Images/thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="comment-button">
                            <img src="/Images/comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
                <div className="story-box">
                    {/* This would be retrieved from the database */}
                    <h4>Story 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    <div className="story-likes-comments">
                        <div className="like-section">
                            <button>
                                <img src="/Images/thumbs_up.png" height="30" alt="thumbs up icon"/>
                                {/* The "Like" button here is the web socket */}
                            </button>
                            <h4>13</h4>
                        </div>
                        <button className="comment-button">
                            <img src="/Images/comment.png" height ="25" alt="comment icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <aside>
            <nav className="comment-navigation">
                <button>
                    <h5>View Comments</h5>
                </button>
                <button>
                    <h5>Write Comment</h5>
                </button>
            </nav>
            <section className="comment-section">
                <h3 className="comment-section-title">Comments</h3>
                <div className="scrollable">
                    {/* Comments are retrieved from the database */}
                    <div className="comment">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu varius eros, eget tincidunt tellus. Cras
                        suscipit ex eget iaculis aliquet. Vivamus sit amet fringilla tellus. Vestibulum quis molestie nunc. Etiam at
                        odio sagittis, luctus erat at, laoreet libero. Aenean sapien velit, euismod a massa et, fermentum mattis nisi.
                        Integer efficitur ipsum ut sapien facilisis, at consequat nibh ultrices.</p>
                    </div>
                    <div className="comment">
                        {/* gifs id will be stored in the database then refetched from the 3rd party when displaying in the comments */}
                        <img src="/Images/Jujutsu Kaisen Jjk GIF by Xbox.gif" className="sized-gif"/>
                    </div>
                </div>
            </section>
            <section className="create-comment-section">
                <h3>Add a Comment</h3>
                <div className="comment-option-select">
                    <button>
                        <p>Type Comment</p>
                    </button>
                    <button>
                        <p>GIF</p>
                    </button>
                </div>
                <section className="scrollable">
                    <form>
                        <div className="typed-comment">
                            <button type="submit">Post</button>
                            <div>
                                <textarea placeholder="Enter a Comment"></textarea>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="scrollable">
                    <form>
                        <div className="gif-comment">
                            <button>Post</button>
                            <div className="comment-content-box">
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