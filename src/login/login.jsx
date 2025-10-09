import React from 'react';

export function Login() {
  return (
    <main>
        <div className="center-window">
            <div className="login-box">
                <form action="index.html">
                    <div className="login-field">
                        <label className="login-text" for="username">Username</label>
                        <input id="username" type="text"/>
                    </div>
                    <div className="login-field">
                        <label className="login-text" for="password">Password</label>
                        <input id="password" type="password"/>
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