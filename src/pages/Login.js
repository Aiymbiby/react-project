import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (name.trim().length < 3) {
      setError("Минимум 3 символа");
      return;
    }

    login(name);

    navigate("/profile");
  };

  return (
    <div className="page">
      <h2>Login</h2>

      <input
        className="input"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError("");
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="hero-btn" onClick={handleLogin}>
        Войти
      </button>
    </div>
  );
};

export default Login;