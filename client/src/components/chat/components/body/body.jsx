export const Body = () => {
  return (
    <>
      <header className="header">
        <button className="escape_btn">Leave chat</button>
      </header>
      <div className="container">
        <div className="chats">
          <p className="sender_name">You</p>
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
