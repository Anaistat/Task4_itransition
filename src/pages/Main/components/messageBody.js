import React from "react";

const MessageBody = () => {
    return(
        <form action="" className="message-form">
            <input type="text" placeholder='To'/>
            <input type="text" placeholder='Subject'/>
            <textarea name="message" className="message-text" placeholder="Text"></textarea>
        </form>
    )
}

export default MessageBody