import "./body.css";

export const Body = () => {
  return (
    <>
      <header className="body_header">
        <button className="escape_btn">Leave</button>
      </header>
      <div className="body_container">
        <div className="chats">
          <p className="sender-name">You</p>
          <div className="message-sender">
            <p>Hello</p>
          </div>
        </div>

        <div className="chats">
          <p>You</p>
          <div className="message-recipient">
            <p>Hello</p>
          </div>
        </div>
      </div>
    </>
  );
};
