import { useEffect, useState } from "react";
import { Body } from "./components/body/body";
import { MessageField } from "./components/messageField/messageField";
import { Sidebar } from "./components/sidebar/sidebar";
import "./styles.css";

function ChatPage({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <Sidebar />

      <main className="main">
        <Body messages={messages} />

        <MessageField socket={socket} />
      </main>
    </div>
  );
}

export default ChatPage;
