/* eslint-disable react/prop-types */
import "../styles/Input.css";

const Input = (props) => {
  const { label, type, placeholder, handleChange } = props;
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Input;
