import React from 'react';
import "../css/Header.css";
const Header = () => {
    return (
        <div className="headerChat d-flex justify-content-between align-items-center">
            <div className="mainTitle">Chat Client</div>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle blueButton" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Nouveaux chats
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">chat 1</a></li>
                    <li><a className="dropdown-item" href="#">chat 2</a></li>
                    <li><a className="dropdown-item" href="#">chat 3</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;