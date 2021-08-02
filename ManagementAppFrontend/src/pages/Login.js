import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLoginContext } from "../context/login_context";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [emailinput, setEmail] = useState("");
  const [passwordinput, setPassword] = useState("");

  let { isAuthenticated, email, pass, checkingAuthentication } =
    useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailinput, passwordinput);
    if (emailinput === email && pass === passwordinput) {
      checkingAuthentication();
    }
  };

  const auth = localStorage.getItem("authentication");
  const authData = JSON.parse(auth);
  useEffect(() => {
    if (authData) {
      checkingAuthentication();
    }
  }, [authData, checkingAuthentication]);
  // checking local storage data and update isAuthenticated

  if (!isAuthenticated) {
    return (
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email--1">Email:</label>
          <input
            type="email"
            value={emailinput}
            name="email"
            id="email--1"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={passwordinput}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="password"
            required
          />
          <div className="btn">
            <input type="submit" name="submit" value="Log In" />
          </div>
        </form>
      </Wrapper>
    );
  } else {
    localStorage.setItem("authentication", isAuthenticated);
    return (
      <div>
        <Redirect to="/">Go</Redirect>
      </div>
    );
  }
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #400040;
  height: 100vh;

  label {
    font-size: 2rem;
  }
  input {
    font-size: 1.6rem;
    padding: 0.3rem;
  }
  .btn {
    text-align: center;
    margin-top: 1rem;
  }
  .log-in {
    cursor: pointer !important;
  }
`;

export default Login;
