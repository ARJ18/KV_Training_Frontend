/* eslint-disable react/prop-types */
import { useState } from "react";
//import Card from "./Card";
import Button from "../components/Button";
import Input from "../components/Input";
import "../styles/Login.css";
import { useLoginValidation } from "../hooks/useLoginValidation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (localStorage.getItem(username) === password) navigate("/employee");
    else {
      console.log("Wrong Password");
    }
  };
  const handleSignup = () => {
    console.log(username, password);
    localStorage.setItem(username, password);
    setIsSignup(false);
  };

  const { errorUsername, errorPassword } = useLoginValidation({
    username,
    password,
  });

  return (
    <div className="login-page">
      <div className="login-image">
        <img src="src/assets/kv-login.jpeg" alt="login image" />
      </div>
      <div className="login-interface">
        <img
          width="350"
          height="75"
          src="src/assets/kv logo.png"
          alt="logo"
        ></img>
        <Input
          label="Username"
          type="text"
          placeholder="Username"
          handleChange={handleUsernameChange}
        ></Input>
        <div style={{ color: "red" }}>{errorUsername}</div>
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          handleChange={handlePasswordChange}
        ></Input>
        <div style={{ color: "red" }}>{errorPassword}</div>
        {isSignup ? (
          <Button label="Sign Up" handleClick={handleSignup} color="blue" />
        ) : (
          <Button label="Login" handleClick={handleLogin} color="blue" />
        )}
        <a
          className="sign-up"
          onClick={() => {
            setIsSignup(true);
          }}
        >
          Havent got an account yet? Sign up here
        </a>
      </div>
    </div>
  );
};

export default Login;
