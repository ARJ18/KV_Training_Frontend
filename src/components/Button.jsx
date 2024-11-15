/* eslint-disable react/prop-types */
import "../styles/Button.css";
const Button = ({ label, handleClick, color }) => {
  return (
    <button onClick={handleClick} className={color}>
      {label}
    </button>
  );
};

export default Button;
