import { useNavigate } from "react-router-dom";
import "./body.css";

export const Body = ({ messages, status }) => {
  const navigate = useNavigate();

  const handleLeave = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <header className="body_header">
        <button className="escape_btn" onClick={handleLeave}>
          Leave
        </button>
      </header>
      <div className="body_container">
        {messages.map((element) =>
          element.name === localStorage.getItem("userName") ? (
            <div className="chats" key={element.id}>
              <p className="sender-name">Me</p>
              <div className="message-sender">
                <p>{element.text}</p>
              </div>
            </div>
          ) : (
            <div className="chats" key={element.id}>
              <p>{element.name}</p>
              <div className="message-recipient">
                <p>{element.text}</p>
              </div>
            </div>
          )
        )}

        <div className="status">
          <p>{status}</p>
        </div>
      </div>
    </>
  );
};
