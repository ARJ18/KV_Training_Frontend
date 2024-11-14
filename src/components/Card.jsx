const Card = (prop) => {
    console.log(prop);
  return (
    <div
      style={{
        padding: "8px",
        border: "2px solid blue",
        backgroundColor:"lightgray",
        margin: "10px 10px",
      }}
    >
      {prop.label}
    </div>
  );
};

export default Card;
