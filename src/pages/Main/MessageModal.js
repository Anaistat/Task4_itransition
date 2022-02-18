import React from "react";
import MessageBody from "./components/messageBody";
import {Button} from "react-bootstrap";

const MessageModal = props =>{
    return(
        <div className={`message-modal-container ${props.isOpened?'open':'close'}`} style={{...props.style}}>
            <div className='message-modal'>
                <div className='modal-close'>
                    <button onClick={props.closeModal}>x</button>
                </div>
                <div className="message-title">
                    <h3>New message</h3>
                    <hr/>
                </div>
                <div className='message-content'>
                    <MessageBody/>
                </div>
                <div className="message-send">
                    <Button variant="outline-secondary">Send</Button>
                </div>

            </div>
        </div>
    )
}

export default MessageModal