/* eslint-disable react/prop-types */
import "../styles/Navbar.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-image">
        <Link to="/"><img height="50" width="auto" src="/src/assets/kv logo.png" alt="logo" /></Link>
      </div>
      <Button label="Logout" color="blue" />
    </div>
  );
};

export default Navbar;
