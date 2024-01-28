import React from 'react';
import "../css/Waiting.css";

const Waiting = () => {
    return (
        <div className="waitingMainDiv">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div>Please Wait...</div>
        </div>
    );
};

export default Waiting;