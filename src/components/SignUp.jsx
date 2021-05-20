import axios from 'axios';
import React, { useState } from 'react'
import { PROJECT_ID } from '../App';

const SignUp = () => {

    const authObject = { 'Project-ID': PROJECT_ID, 'User-Name': userName , 'User-Secret': 
    password  };

    const handleSubmit = async (e) => {
        
        e.preventDefault()

      
    }
    return (
        <div>
            <div className="form"> 
                <h1 className="title">NTA Chat</h1> 
                <form className="login-form" onSubmit={handleSubmit}> 
                    
                    <input type="text" placeholder="Username" className="input" required />
                    <input type="email" placeholder="Email" className="input" required />
                    
                    <input type="password" placeholder="Password" className="input" required />
                    
                    <button align="center" type="submit" className="button" >
                        <span>Sign up</span>
                    </button>
                    
                </form> 
            </div> 
        </div>
    )
}

export default SignUp;