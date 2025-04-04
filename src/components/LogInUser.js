import { useState } from "react";

const LogInUser = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      console.log("logging in as :" + username);
      onLogin(username);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>UserName:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LogInUser;
