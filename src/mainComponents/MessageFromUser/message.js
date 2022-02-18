import React from "react";

const Message = () => {
    return(
        <div className="message">
            <div>
                <img src="./user.png" alt="user" width="35" height="35"/>
                <span>person@email.com</span>
                <p>Message...</p>
            </div>
            <div>
                <span>17 feb</span>
            </div>
        </div>
    )
}

export default Message