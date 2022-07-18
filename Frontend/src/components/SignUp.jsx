import React from "react";

export const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="nameInputSignUp"
          placeholder="name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="emailInputSignUp"
          placeholder="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="passwordInputSignUp"
          placeholder="password"
        />

        <button>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;
