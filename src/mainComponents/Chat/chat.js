import React from "react";

const Chat = (props) => {
    return(
        <div className={`conversation-container ${props.isChatOpened?'opened':'closed'}`} style={{...props.style}}>
            <p>Message...</p>
        </div>
    )
}

export default Chat