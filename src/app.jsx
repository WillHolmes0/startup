import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLiNk, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Feed } from './feed/feed';
import { WriteStory } from './writeStory/writeStory';

export default function App() {
    return (
        <BrowserRouter>
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
                            <NavLink to='login'>Login</NavLink>
                        </button>
                        <button> 
                            <NavLink to='feed'>Feed</NavLink>
                        </button>
                        <button> 
                            <NavLink to='feed'>Feed</NavLink>
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
        </BrowserRouter>
    );
}