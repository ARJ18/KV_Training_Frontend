import { useParams } from "react-router-dom";
import "../styles/EmployeeList.css"
const Details = () => {
  const { id } = useParams();
  return (
    <div className="employee-details">
      <div className="create-header">Employee Details</div>
      <h3>Employee ID: {id}</h3>
    </div>
  );
};

export default Details;
