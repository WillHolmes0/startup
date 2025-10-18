import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Feed } from './feed/feed';
import { WriteStory } from './writeStory/writeStory';

export default function App() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const [currentUser, setCurrentUser] = React.useState(localStorage.getItem('currentUser'));

    function navigation() {
        console.log(currentUser);
        if (currentUser != null) {
            return (
                <nav className="navigation">
                    <button> 
                        <NavLink to='/'>Login</NavLink>
                    </button>
                    <button> 
                        <NavLink to='feed'>Feed</NavLink>
                    </button>
                    <button> 
                        <NavLink to='writeStory'>Write</NavLink>
                    </button>
                </nav>
            );
        }
        return (
            <nav className="navigation"></nav>
        );
    }

    function updateCurrentUser(newUser) {
        localStorage.setItem('currentUser', newUser);
        setCurrentUser(newUser);
    }

    return (
        <BrowserRouter>
            <div className="body">
                <header>
                    <div className="title-and-name">
                        <div className="name">
                            <p>William Holmes</p>
                        </div>
                        <div className="title">
                            <h1>Story Forrest</h1>
                            <img src="TreeIcon.jpeg" height="50" alt="Tree Icon"/>
                        </div>
                    </div>
                    {navigation()}
                </header>

                <Routes> 
                    <Route path='/' element={<Login UpdateCurrentUser={updateCurrentUser}/>} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/writeStory' element={<WriteStory />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                
                <footer>
                    <div className="git-repo-link">
                        <p>See the source Code: </p>
                        <a href="https://github.com/WillHolmes0/startup">Github Repository</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <main className="centered-text white-background">
            <h2>404: Page not found.</h2>
        </main>
    );
}