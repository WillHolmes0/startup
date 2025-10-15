import './feed.css';
import React from 'react';

  export function ViewCommentsComponent({visible}) {
    console.log("called function");
    if (visible) {
        return (
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
                        <img src="Jujutsu Kaisen Jjk GIF by Xbox.gif" className="feed-sized-gif"/>
                    </div>
                </div>
            </section>
        );
    }
    return null;
  }