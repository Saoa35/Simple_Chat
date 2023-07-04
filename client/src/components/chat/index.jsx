import { Body } from "./components/body/body";
import { MessageField } from "./components/messageField/messageField";
import { Sidebar } from "./components/sidebar/sidebar";
import "./styles.css";

function ChatPage() {
  return (
    <div className="chat">
      <Sidebar />

      <main className="main">
        <Body />

        <MessageField />
      </main>
    </div>
  );
}

export default ChatPage;
