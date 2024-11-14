import "../styles/Dropdown.css";

/* eslint-disable react/prop-types */
const Dropdown = (props) => {
  const { label, options, name } = props;
  return (
    <div className="dropdown-box">
      <label className="input-label">{label}</label>
      <br />

      <select name={name} className="dropdown">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
