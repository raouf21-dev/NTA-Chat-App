import {SendOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { sendMessage } from 'react-chat-engine';
import '../styles/MessageForm.css';

const MessageForm = (props) => {
    
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });

        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form  onSubmit={handleSubmit} className="message-form">
            <input
                className="message-input"
                type="text"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleChange}
            />
            
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm;