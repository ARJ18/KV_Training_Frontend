/* eslint-disable react/prop-types */

import "../styles/ConfirmDelete.css";
import Button from "./Button";
const ConfirmDelete = ({ onCancel, onConfirm, deleteState }) => {
  // Don't render anything if not open

  return (
    <dialog open={deleteState} className="dialog">
      <h2 style={{ padding: "5px", fontSize: "24px" }}>Are you sure ?</h2>
      <p style={{ fontSize: "18px" }}>
        Do you really want to delete <br />
        employee?
      </p>
      <div className="button-container">
        <Button label="Confirm" color="blue" handleClick={onConfirm}></Button>
        <Button label="Cancel" handleClick={onCancel} color="white"></Button>
        {/* <button className="button" style={{ backgroundColor: 'red' }} onClick={onConfirm}>Delete</button>
        <button className="button" onClick={onCancel}>Cancel</button> */}
      </div>
    </dialog>
  );
};

export default ConfirmDelete;
