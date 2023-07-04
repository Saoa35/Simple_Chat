import socketIO from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

const socket = socketIO.connect("http://localhost:5000");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
