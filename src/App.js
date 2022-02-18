import './App.css';
import NewMessage from "./mainComponents/MessageModal/newMessage";
import MessagesBar from "./mainComponents/MessagesBar/MessagesBar";
import {useState} from "react";
import React from "react";
import Chat from "./mainComponents/Chat/chat";

function App() {

    const [isChatOpened, setIsChatOpened] = useState(false)

  return (
    <div className="App">
        <div className="email-window-container">
            <div className="email-window-inner-left">
                <div onClick={()=> setIsChatOpened(prev=>!prev)}><MessagesBar/></div>
            </div>
            <div className="email-window-inner-right">
                <Chat isChatOpened={isChatOpened}/>
                <NewMessage/>
            </div>
        </div>
    </div>
  );
}

export default App;
