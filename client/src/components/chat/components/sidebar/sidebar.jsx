import { useEffect, useState } from "react";
import "./sidebar.css";

export const Sidebar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("responseNewUser", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="sidebar">
      <h4 className="sidebar_header">Users</h4>

      <ul className="users">
        {users.map((element) => (
          <li key={element.socketID}>{element.user}</li>
        ))}
      </ul>
    </div>
  );
};
