/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
//import Card from "./Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "../../styles/Login.css";
import { useLoginValidation } from "../../hooks/useLoginValidation";
// import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./loginApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, loginResponse] = useLoginMutation();
  // const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (loginResponse.isSuccess) {
      localStorage.setItem("token", loginResponse.data.token);
      navigate("app/employee");
    }
  }, [loginResponse, navigate]);
  const handleLogin = () => {
    userLogin({
      email: username,
      password: password,
    });

    // if (localStorage.getItem(username) === (password || null))
    //   navigate("/app/employee");
    // else {
    //   console.log("Wrong Password");
    // }
  };
  const handleSignup = () => {
    localStorage.setItem(username, password);
    ``;
    console.log("Sign up successful!");
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
          <Button
            label="Sign Up"
            handleClick={handleSignup}
            color="login-button"
          />
        ) : (
          <Button
            label="Login"
            handleClick={handleLogin}
            color="login-button"
          />
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
