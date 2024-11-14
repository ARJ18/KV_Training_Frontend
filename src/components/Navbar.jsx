/* eslint-disable react/prop-types */
import "../styles/Navbar.css";
import Button from "./Button";

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <div className="navbar-image">
        <img height="50" width="auto" src="src/assets/kv logo.png" alt="logo" />
      </div>
      <Button
        label="Logout"
        handleClick={() => {
          onLogout(false);
        }}
        color="blue"
      />
    </div>
  );
};

export default Navbar;
