import React from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';

export function Login(props) {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    // function getUsers() {
    //     return JSON.parse(localStorage.getItem('users') || '[]');
    // }

    async function LoginUser() {
        const res = await fetch('api/auth', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        await res.json();
        if (res.ok) {
            props.UpdateCurrentUser(email);
            console.log("login");
        } else {
            console.log("couldn't login");
        }
    }

    async function registerUser() {

        const res = await fetch('api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password})
        });
        await res.json();
        if (res.ok) {
            console.log("sucess");
        } else {
            console.log("failure");
        }
    }

    function getEmail(e) {
        setEmail(e.target.value);
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
                        <label className="login-text" htmlFor="username">Email</label>
                        <input onChange={getEmail} className="login-input" id="username" type="text"/>
                    </div>
                    <div className="login-field">
                        <label className="login-text" htmlFor="password">Password</label>
                        <input onChange={getPassword} className="login-input" id="password" type="password"/>
                    </div>
                    <div className="login-button">
                        <button onClick={LoginUser} >Login</button>
                        <button onClick={registerUser} >Register</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}