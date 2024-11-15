/* eslint-disable react/prop-types */
const Card = ({label}) => {

  return (
    <div
      style={{
        padding: "8px",
        border: "2px solid blue",
        backgroundColor:"lightgray",
        margin: "10px 10px",
      }}
    >
      {label}
    </div>
  );
};

export default Card;
