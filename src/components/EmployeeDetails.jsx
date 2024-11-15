import { useParams } from "react-router-dom";
import "../styles/EmployeeDetails.css";
import { useEffect,useState } from "react";
import formatDate from "../utils/formatDate";
const Details = () => {
  const [employee,setEmployee] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/employee/${id}`)
      .then((res) => res.json())
      .then((res)=>setEmployee(res));
  });
  return (
    <div className="employee-details-page">
      <div className="employee-details-header">Employee Details</div>
      <div className="employee-details-labels">
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Employee Name</p>
          <p>{employee?.name}</p>
        </div>
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Joining Date</p>
          <p>{formatDate(employee?.createdAt)}</p>
        </div>
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Experience</p>
          <p>{employee?.department.id} years</p>
        </div>
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Role</p>
          <p>{employee?.role}</p>
        </div>
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Status</p>
          <p>Active</p>
        </div>
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Address</p>
          <p>{employee?.address.line1}</p>
        </div>
        <div className="details-box">
          <p style={{ opacity: "0.5" }}>Employee ID</p>
          <p>{employee?.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
