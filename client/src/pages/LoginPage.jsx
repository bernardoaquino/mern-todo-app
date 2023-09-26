/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import loginRequest from "../api/loginRequest";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";

export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(password)
      .then(({ token }) => {
        setToken(token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <div
        style={{
          width: "50%",
          margin: "20px auto",
          padding: "30px",
          position: "relative",
          borderRadius: "5px",
          boxShadow: "0 0 15px 5px #000",
          fontSize: "20px",
          color: "#f00",
        }}
      >
        {error}
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            fontFamily: "'Roboto', sans-serif",
            color: "#333",
            fontSize: "1.2rem",
            padding: "0.5rem 2rem",
            borderRadius: "0.2rem",
            backgroundColor: "rgb(255, 255, 255)",
            border: "none",
            borderBottom: "0.3rem solid transparent",
            transition: "all 0.3s",
            marginRight: "8px",
          }}
        />
        <button
          style={{
            appearance: "button",
            backfaceVisibility: "hidden",
            borderRadius: "6px",
            borderWidth: "0",
            boxShadow:
              "rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0",
            boxSizing: "border-box",
            color: "#000",
            cursor: "pointer",
            fontFamily:
              '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
            fontSize: "100%",
            height: "44px",
            lineHeight: "1.15",
            outline: "none",
            overflow: "hidden",
            padding: "0 25px",
            position: "relative",
            textAlign: "center",
            textTransform: "none",
            transform: "translateZ(0)",
            transition: "all .2s,box-shadow .08s ease-in",
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: "manipulation",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
