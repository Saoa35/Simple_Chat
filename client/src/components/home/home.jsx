import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ socket }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName.length && !email.length) {
      setValid(true);
    } else {
      localStorage.setItem("userName", userName);
      navigate("/chat");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter chat</h2>
      <label htmlFor="userName">Name</label>
      <input
        type="text"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enter</button>
      {valid && <p>Name and email fields must be filled</p>}
    </form>
  );
}

export default Home;
