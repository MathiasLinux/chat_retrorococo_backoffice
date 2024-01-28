import React from 'react';
import Header from "../Composants/Header";
import "../css/main.css";
import Sidebar from "../Composants/Sidebar";
import ChatContent from "../Composants/ChatContent";

const Root = () => {
    return (
        <div>
            <Header/>
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col colWithoutPadding">
                            <Sidebar/>
                        </div>
                        <div className="col colWithoutPadding">
                            <ChatContent/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Root;