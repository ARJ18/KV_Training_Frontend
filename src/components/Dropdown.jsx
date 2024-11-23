import "../styles/Dropdown.css";

/* eslint-disable react/prop-types */
const Dropdown = (props) => {
  const { label, options, name, style,selectedValue,handleChange} = props;
  return (
    <div className="dropdown">
      <label className="input-label">{label}</label>

      <select value={selectedValue} onChange={(e)=>{
        handleChange(e);
      }} name={name} className="dropdown-box" style={style}>


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
