import "../styles/Button.css";
const Button = (prop) => {
  const { label, handleClick,color} = prop;
  return (
    <button onClick={handleClick} className={color} >
      {label}
    </button>
  );
};

export default Button;
