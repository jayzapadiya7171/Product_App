import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setUsername }) {
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const correctUsername = "jay";
  const correctPassword = "1234";

  const handleLogin = () => {
    if (inputUsername === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      setUsername(inputUsername);
      navigate("/product");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
