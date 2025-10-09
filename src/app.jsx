import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body">
            <header>
                <div class="title-and-name">
                    <div class="name">
                        <p>William Holmes</p>
                    </div>
                    <div class="title">
                        <h1>Story Forrest</h1>
                        <img src="/Images/TreeIcon.jpeg" height="50" alt="Tree Icon"/>
                    </div>
                </div>
                <nav class="navigation">
                    <button> 
                        <a href="index.html">Login</a>
                    </button>
                    <button> 
                        <a href="home.html">Feed</a>
                    </button>
                    <button> 
                        <a href="writeStory.html">Write</a>
                    </button>
                </nav>
            </header>
            
            <main> </main>
            
            <footer>
                <div class="git-repo-link">
                    <p>See the source Code: </p>
                    <a href="https://github.com/WillHolmes0/startup">Github Repository</a>
                </div>
            </footer>
        </div>
    );
}