import { useState } from "react";
import "./messageField.css";

export const MessageField = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}-${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  return (
    <div className="message-field">
      <form className="message_form" onSubmit={handleSend}>
        <input
          type="text"
          className="user-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sent_btn">Sent</button>
      </form>
    </div>
  );
};
