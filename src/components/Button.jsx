/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/Button.css";
import React from "react";
const Button = ({ label, handleClick, color }) => {
  return (
    <button
      onClick={handleClick}
      className={color}
      data-testid="button-test-id"
    >
      {label}
    </button>
  );
};

export default Button;
