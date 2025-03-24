import React, { useState } from 'react';
import axios from 'axios';
import { PROJECT_ID } from '../App';
import '../styles/LoginForm.css'
const LoginForm = () => {

    const [userName, setUserName] = useState('test');
    const [password, setPassword] = useState('test');
    const [error, setError] = useState('');

    const authObject = { 'Project-ID': PROJECT_ID, 'User-Name': userName , 'User-Secret': 
    password  };

    const handleSubmit = async (e) => {
        
        e.preventDefault()

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError(alert('Username or Password incorrect'))
        }
    }

    return ( 
        <div className="wrapper"> 
            <div className="form"> 
                <h1 className="title">NTA Chat</h1> 
                <form className="login-form" onSubmit={handleSubmit}> 
                    
                    <input type="text" value={userName} onChange={(e) => (setUserName(e.target.value))} placeholder="Username" className="input" required />
                    
                    <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} placeholder="Password" className="input" required />
                    
                    <button align="center" type="submit" className="button" onClick={handleSubmit}>
                        <span>Login</span>
                    </button>
                    <h3>{ error }</h3>
                </form> 
            </div> 
        </div> 
    ) 
} 

export default LoginForm;