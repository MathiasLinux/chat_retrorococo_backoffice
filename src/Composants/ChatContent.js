import React from 'react';
import "../css/ChatContent.css";

const ChatContent = () => {
    return (
        <div>
            <div className="chatMessages">
                <div className="chatMessage fromMe">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto enim error exercitationem inventore itaque minima modi, molestiae nesciunt odio odit pariatur possimus quibusdam repudiandae, rerum temporibus, unde veniam voluptate.
                </div>
                <div className="chatMessage otherUser">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto enim error exercitationem inventore itaque minima modi, molestiae nesciunt odio odit pariatur possimus quibusdam repudiandae, rerum temporibus, unde veniam voluptate.
                </div>
            </div>
            <div className="container-fluid">
            <div className="chatTextInput row g-2">
                <div className="col-md">
                    <input className="form-control" type="text" name="chatInput" id="chatInput"/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary blueButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                             stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19V6M5 12l7-7 7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChatContent;