import React from 'react';
import "../css/Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sideBarMain d-flex flex-column justify-content-center align-items-center">
            <div className="sideBarTitle">Chat en cours</div>
            <div className="sideBarChat">
                <div className="sideBarChatTitle chatActive">Chat 1</div>
                <div className="sideBarChatTitle">Chat 2</div>
                <div className="sideBarChatTitle">Chat 3</div>
            </div>
        </div>
    );
};

export default Sidebar;