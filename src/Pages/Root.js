import React, {useEffect} from 'react';
import Header from "../Composants/Header";
import "../css/main.css";
import Sidebar from "../Composants/Sidebar";
import ChatContent from "../Composants/ChatContent";
import {socket} from '../socket';
import Wainting from "../Composants/Waiting";

const Root = () => {
    const [isConnected, setIsConnected] = React.useState(false);

    socket.on('authenticated', () => {
        setIsConnected(true);
        console.log('authenticated');
    });

    useEffect(() => {
        let token = document.cookie.split('; ').find(row => row.startsWith('id_employee'));

        if (token) {
            token = token.split('=')[1];
            console.log(token);
            if (token) {
                token = decodeURIComponent(token);
                const [userId, userFirstName, hmac, statut] = token.split("|");
                let tokenToSend = {userId, userFirstName, hmac, statut};
                console.log(tokenToSend)
                tokenToSend = JSON.stringify(tokenToSend);
                socket.userId = userId;
                socket.userFirstName = userFirstName;
                socket.customer = statut;
                socket.emit('authenticate', tokenToSend);
            }
        }
    }, []);

    return (
        isConnected ?
            <div className="totalChat">
                <Header/>
                <>
                    <div className="container-fluid mainContent">
                        <div className="row mainRowContent">
                            <div className="col-4 colWithoutPadding">
                                <Sidebar/>
                            </div>
                            <div className="col colWithoutPadding">
                                <ChatContent socket={socket}/>
                            </div>
                        </div>
                    </div>
                </>
            </div> :
            <Wainting/>
    );
};

export default Root;