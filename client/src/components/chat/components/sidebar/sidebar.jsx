import { useEffect, useState } from "react";
import "./sidebar.css";

export const Sidebar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("responseNewUser", (data) => setUsers(data));
  }, [socket, users]);

  const filteredList = users.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (el) => el.user === value.user && el.socketID === value.socketID
      )
  );

  return (
    <div className="sidebar">
      <h4 className="sidebar_header">Users</h4>

      <ul className="users">
        {filteredList.map((element) => (
          <li key={element.socketID}>{element.userName}</li>
        ))}
      </ul>
    </div>
  );
};
