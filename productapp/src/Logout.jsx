import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setIsLoggedIn, setUsername }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login state
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  }, [setIsLoggedIn, setUsername, navigate]);

  return (
    <div style={{ padding: "50px" }}>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
