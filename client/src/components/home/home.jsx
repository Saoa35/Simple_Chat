import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

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
    <form onSubmit={handleSubmit} className="form">
      <h2 className="home_header">Enter chat</h2>
      <label htmlFor="userName"></label>
      <input
        className="user_input"
        placeholder="Enter your name"
        type="text"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="email"></label>
      <input
        className="email_input"
        placeholder="Enter your email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="submit_btn">
        Enter
      </button>
      {valid && (
        <p className="warning">Name and email fields should not be empty</p>
      )}
    </form>
  );
}

export default Home;
