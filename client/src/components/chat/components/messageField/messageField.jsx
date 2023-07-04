import "./messageField.css";

export const MessageField = () => {
  return (
    <div className="message-field">
      <form className="message_form">
        <input type="text" className="user-message" />
        <button className="sent_btn">Sent</button>
      </form>
    </div>
  );
};
