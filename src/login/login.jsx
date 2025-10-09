import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="login-main">
        <div className="login-center-window">
            <div className="login-box">
                <form action="index.html">
                    <div className="login-field">
                        <label className="login-text" for="username">Username</label>
                        <input className="login-input" id="username" type="text"/>
                    </div>
                    <div className="login-field">
                        <label className="login-text" for="password">Password</label>
                        <input className="login-input" id="password" type="password"/>
                    </div>
                    <div className="login-button">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
  );
}