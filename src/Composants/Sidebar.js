import React from 'react';
import "../css/Sidebar.css";

const Sidebar = ({socket, setIsChatting, isConnected, setCurrentRoomId, currentRoomId}) => {
    // console.log(setIsChatting)
    const [rooms, setRooms] = React.useState([]);

    function getAllChats() {
        socket.on("rooms", (rooms) => {
            // Add the content of the rooms to the state
            setRooms(rooms.rooms);
        });
    }

    getAllChats();

    return (
        <div className="sideBarMain d-flex flex-column justify-content-center align-items-center">
            <div className="sideBarTitle">Chats</div>
            {isConnected ?
            <div className="sideBarChat">
                {rooms.map(room => {
                    console.log(room)
                    return (
                        <div className="sideBarChatContent" key={room.id} data-roomid={room.id} onClick={
                            () => {
                                setIsChatting(true);
                                // Send the event to the server to join the room
                                if (currentRoomId !== room.id) {
                                    if (currentRoomId !== null) {
                                        socket.emit('leaveRoom', currentRoomId);
                                        // Clear the chatContent div
                                        const chatContent = document.querySelector('.chatMessages');
                                        console.log(chatContent)
                                        chatContent.innerHTML = '';

                                        // add a class to change the color of the room selected
                                        let rooms = document.querySelectorAll('.sideBarChatContent');

                                        rooms.forEach(room => {
                                            room.classList.remove('sideBarChatContentSelected');
                                        });

                                        let roomSelected = document.querySelector(`[data-roomid="${room.id}"]`);

                                        roomSelected.classList.add('sideBarChatContentSelected');
                                    }

                                    setCurrentRoomId(room.id);
                                    socket.emit('joinRoom', room.id);
                                }
                                    // Change the color of the room selected
                                    let rooms = document.querySelectorAll('.sideBarChatContent');

                                    rooms.forEach(room => {
                                        room.classList.remove('sideBarChatContentSelected');
                                    });

                                    let roomSelected = document.querySelector(`[data-roomid="${room.id}"]`);

                                    roomSelected.classList.add('sideBarChatContentSelected');
                            }
                        }>
                            <div className="sideBarChatTitle">{room.name}</div>
                        </div>
                    )})

                }
            </div> :
            <div>
                <div className="sideBarChatTitle">Chargement...</div>
            </div> }
        </div>
    );
};

export default Sidebar;