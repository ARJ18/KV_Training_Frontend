/* eslint-disable react/prop-types */
import "../styles/Input.css";

const Input = (props) => {
  const { value,name,label, type, placeholder, handleChange, disabled=false } = props;
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
