import { Body } from "./components/body";
import { MessageField } from "./components/messageField";
import { Sidebar } from "./components/sidebar";

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
