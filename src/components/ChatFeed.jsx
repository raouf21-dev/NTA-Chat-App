import React from 'react';
import MessageForm from './MessageForm';
import MessageReceived from './MessageReceived';
import MessageSent from './MessageSent';
import '../styles/ChatFeed.css';

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    // console.log(props);

    // const renderReadReceipts = (message, isMessageSent) => { // check if message has been read
    //     chat.people.map((person, index) => person.last_read === message.id && (
    //         <div
    //             key={`read_${index}`}
    //             className="read-receipts"
    //             style={{
    //                 float: isMessageSent ? 'right' : 'left',
    //                 backgroundImage: `url(${person?.person?.avatar})`
    //             }}
    //         />
    //     ))
    // }

    const renderMessages = () => {  //To generate messages

        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMessageSent = userName === message.sender.username;
        
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    
                    <div className="message-block">
                        {
                            isMessageSent ?
                            <MessageSent message={message} />
                            :
                            <MessageReceived message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMessageSent ? '18px' : '0px', marginLeft: isMessageSent ? '0px' : '68px' }}></div>
                    <div
                        className="read-receipts" >
                        {/* {renderReadReceipts(message, isMessageSent)} */}
                        {/* read-receipts */}
                    </div>
                </div>
            );
        })
    }

    
    if (!chat) return 'Loading...';
    
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map(person => ` ${person.person.username}`)}
                </div>
            </div>
            { renderMessages() }
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={ activeChat }/>
            </div>
        </div>
    )
}

export default ChatFeed;