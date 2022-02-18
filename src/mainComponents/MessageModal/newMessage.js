import React, {useState} from "react";
import MessageModal from "../../pages/Main/MessageModal";
import { Button } from 'react-bootstrap'

const NewMessage = () =>{

    const [messageModal, setMessageModal] = useState(false)


    return(
        <div className='new-message-container'>
            <Button className="new-message-btn" variant="outline-success" onClick={()=>setMessageModal(true)}>Compose <img src="./pencil.png" alt="pencil" width='25' height="25"/></Button>
            <MessageModal isOpened = {messageModal} closeModal={()=>setMessageModal(false)}/>
        </div>
    )
}

export default NewMessage