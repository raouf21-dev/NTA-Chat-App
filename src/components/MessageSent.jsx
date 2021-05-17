
import React from 'react';
import '../styles/MessageSent.css';

const MessageSent = ({ message }) => {
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50', display: 'flex', flexDirection: 'column'}}>
            {message.text}
        </div>
    )
}

export default MessageSent;