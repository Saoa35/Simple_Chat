import { useEffect, useState } from "react";
import { Body } from "./components/body/body";
import { MessageField } from "./components/messageField/messageField";
import { Sidebar } from "./components/sidebar/sidebar";
import "./styles.css";

function ChatPage({ socket }) {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on("responseTyping", (data) => {
      setStatus(data);
      setTimeout(() => setStatus(""), 1000);
    });
  }, [socket]);

  return (
    <div className="chat">
      <Sidebar socket={socket} />

      <main className="main">
        <Body messages={messages} status={status} />

        <MessageField socket={socket} />
      </main>
    </div>
  );
}

export default ChatPage;
