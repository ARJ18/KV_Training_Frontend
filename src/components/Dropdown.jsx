import "../styles/Dropdown.css";

/* eslint-disable react/prop-types */
const Dropdown = (props) => {
  const { label, options, name, style, placeholder,selectedValue,handleChange} = props;
  return (
    <div className="dropdown">
      <label className="input-label">{label}</label>

      <select value={selectedValue} onChange={(e)=>{
        handleChange(e);
      }} name={name} className="dropdown-box" style={style}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

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
