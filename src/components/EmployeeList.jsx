import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/EmployeeList.css";
const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res);
      });
  }, []);
  console.log(employees);

  return (
    <div className="employee-list">
      <div className="create-header">Employee List</div>

      <ul>
        {employees && employees.users ? (
          employees.users.map((employee) => (
            <li style={{ listStyle: "none" }} key={employee.id}>
              <Link to={`${employee.id}`  }>
                {employee.id} {employee.firstName} {employee.age}
              </Link>
            </li>
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>

    </div>
  );
};

export default EmployeeList;

{
  /* 
      <div className="create-table-header">
        <div className="box-text">Employee Name</div>
        <div className="box-text">Employee ID</div>
        <div className="box-text">Joining Date</div>
        <div className="box-text">Role</div>
        <div className="box-text">Status</div>
        <div className="box-text">Experience</div>
        <div className="box-text">Action</div>
      </div> */
}
