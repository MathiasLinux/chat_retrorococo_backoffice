import React, {useEffect} from 'react';
import "../css/ChatContent.css";


const ChatContent = ({socket}) => {
    // socket = socket.socket;
    const [messages, setMessages] = React.useState([]);

    const [message, setMessage] = React.useState('');

    function sendMessage() {
        if (message === '') {
            return;
        }

        let messageObject = {
            message: message,
            fromMe: true
        }
        setMessages([...messages, messageObject]);
        // Send the message to the server
        // console.log(message);
        socket.emit('message', {
            userFirstName: socket.userFirstName,
            content: message
        });
        setMessage('');
        // Scroll to the bottom of the chatContent div
        const chatContent = document.querySelector('.chatMessages');
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    useEffect(() => {
        socket.on('message', (message) => {
            // console.log(message);
            // check the data-id is equal to the id of the room
            message = message.message;
            let idDiv = document.querySelector('.sideBarChatContentSelected').getAttribute('data-roomid');
            if (message.isAdmin == false && message.from == idDiv) {
                let messageObject = {
                    message: message.content,
                    fromMe: false
                }
                setMessages([...messages, messageObject]);
                // console.log(messages);
                // Scroll to the bottom of the chatContent div
                const chatContent = document.querySelector('.chatMessages');
            }
        });
        return () => {
            socket.off('message');
            // Scroll to the bottom of the chatContent div
            const chatContent = document.querySelector('.chatMessages');
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    }, [messages, socket]);

    useEffect(() => {
        // console.log('oldMessages on');
        socket.on('oldMessages', (oldMessages) => {
            // console.log(typeof oldMessages.messages);
            Object.values(oldMessages.messages).forEach((value) => {
                // console.log(value);
                let messageObject = {
                    message: value.message,
                    fromMe: value.fromMe
                }
                setMessages(prevMessages => [...prevMessages, messageObject]);
            });
        });
        return () => {
            // console.log('oldMessages off');
            socket.off('oldMessages');
            // Scroll to the bottom of the chatContent div
            const chatContent = document.querySelector('.chatMessages');
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    }, [messages, socket]);

    return (
        <div className="chatContentMain">
            <div className="chatMessages">
                {messages.map((message, index) => {
                    return (
                        <div className={`chatMessage ${message.fromMe ? 'fromMe' : 'otherUser'}`} key={index}>
                            {message.message}
                        </div>
                    )})
                }
            </div>
            <div className="container-fluid messageBarContainer">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                }}>
                <div className="chatTextInput row g-2">
                    <div className="col-md">
                        <input className="form-control" type="text" name="chatInput" id="chatInput" onChange={(e) =>{
                            setMessage(e.target.value);
                        } } value={message}/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary blueButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V6M5 12l7-7 7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default ChatContent;