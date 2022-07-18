import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumit = () => {
    fetch("http://localhost:4000/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then(console.log)
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Login</h1>

      <div>
        <input type="text" name="" id="emailInputLogin" placeholder="Email" />
        <input
          type="password"
          name=""
          id="passwordInputLogin"
          placeholder="Password"
        />

        <button>Login</button>
      </div>
    </>
  );
};

export default Login;
