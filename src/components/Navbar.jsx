/* eslint-disable react/prop-types */
import "../styles/Navbar.css";
import Button from "./Button";
import {useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
     
      <Button label="Logout" color="blue" handleClick={()=>{navigate("/")}} />
    </div>
  );
};

export default Navbar;
