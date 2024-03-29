import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState("");

  const handleSubmit = () => {
    "handleSubmit is assigned a value but never used.";
    fetch("http://localhost:4000/user/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthState(data.isAuthenticated);
      });
  };
  return (
    <>
      <h1>Login</h1>
      <div>
        <input
          value={email}
          type="text"
          name="email"
          id="emailLoginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          name="password"
          id="passwordLoginInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit()}>Login</button>
        <div>Authenticated: {String(authState)}</div>
      </div>
    </>
  );
};

export default Login;
