import React from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';

export function Login(props) {
    const [username, setUser] = React.useState();
    const [password, setPassword] = React.useState();

    function getUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    function validateUser() {
        const users = getUsers();
        for (let i = 0; i < users.length; i++) {
            if (username == users[i].username && password == users[i].password) {
                props.UpdateCurrentUser(username);
            }
        }
    }

    function registerUser() {
        const user = {
            username: username,
            password: password
        };
        const users = getUsers();
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users));
    }

    function getUsername(e) {
        setUser(e.target.value);
    }

    function getPassword(e) {
        setPassword(e.target.value);
    }

  return (
    <main className="login-main">
        <div className="login-center-window">
            <div className="login-box">
                <div>
                    <div className="login-field">
                        <label className="login-text" htmlFor="username">Username</label>
                        <input onChange={getUsername} className="login-input" id="username" type="text"/>
                    </div>
                    <div className="login-field">
                        <label className="login-text" htmlFor="password">Password</label>
                        <input onChange={getPassword} className="login-input" id="password" type="password"/>
                    </div>
                    <div className="login-button">
                        <button onClick={validateUser} >Login</button>
                        <button onClick={registerUser} >Register</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}