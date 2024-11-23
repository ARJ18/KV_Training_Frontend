import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrbitProgress } from "react-loading-indicators";
import Dropdown from "./Dropdown";
import formatDate from "../utils/formatDate";
import { Status } from "../utils/constants";
// import store from "../store/store";
// import { loadList } from "../store/actions";
import "../styles/EmployeeList.css";
import { useGetEmployeesQuery } from "./getAllApi";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteMutation } from "./deleteApi";
// import { useSelector } from "react-redux";
// import { ACTION_STATES } from "../utils/constants";
// import { useReducer } from "react";
// import { useDispatch } from "react-redux";
// import { loadEmployee } from "../store/reducer";
// import ConfirmDelete from "./ConfirmDelete";
const EmployeeList = () => {
  //const [employees, setEmployees] = useState(null);
  const [statusValue, setStatusValue] = useState("D");
  const [deleteState, setDeleteState] = useState(false);
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState(0);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case ACTION_STATES.LOAD_LIST: {
  //       const newState = { ...state, employeeList: action.payload };
  //       return newState;
  //     }
  //     default:
  //       return state;
  //   }
  // };
  // const [state,dispatch] = useReducer(reducer,[]);
  // const employees = useSelector((state) => {
  //   console.log(state);

  //   return state.employee.employeeList;
  // });

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch("http://localhost:3000/employee")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // setEmployees(res);
  //       dispatch(loadEmployee(res));
  //     });
  // }, [dispatch]);

  const { data: employees } = useGetEmployeesQuery();
  const [deleteEmployee, deleteResponse] = useDeleteMutation();
  // useEffect(() => {
  //   if(deleteResponse.isSuccess)
  //     deleteRef.current.close();
  // }, [deleteResponse]);
  useEffect(() => {
    // const dept = JSON.parse(employees[0].department)
    if (employees) console.log(employees[0]);
  }, [employees]);
  const handleDeleteClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteId(id);

    setDeleteState(true);
  };
  useEffect(() => {
    if (deleteResponse.isSuccess) console.log("Deleted");
  });
  const handleCancel = () => {
    setDeleteState(false);
  };
  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    console.log(deleteId);
    await deleteEmployee(deleteId);
    setDeleteState(false);
  };

  return (
    <>
      <div className="employee-list-main-container">
        <div className="employee-list-header">
          <div className="employee-list-text">Employee List</div>
          <div className="filter-by">
            <div style={{ marginRight: "10px" }}>Filter By</div>
            <Dropdown
              style={{
                backgroundColor: "#EAF9FF",
                border: "none",
                outline: "none",
                width: "160px",
                borderRadius: "50px",
                padding: "0.25rem 1rem",
                appearance: "none",
                textAlign: "center",
                fontSize: "15px",
                height: "31px",
              }}
              options={Status}
              name="Status_dropdown"
              selectedValue={statusValue}
              handleChange={(e) => {
                setStatusValue(e.target.value);
              }}
            ></Dropdown>
          </div>
          <Link to="../create" style={{ textDecoration: "none" }}>
            <div className="create-employee-link">
              <div className="ellipse">+</div>
              Create Employee
            </div>
          </Link>
        </div>

        <div className="list-container">
          <div className="create-table-header">
            <div className="box-text">Employee Name</div>
            <div className="box-text">Employee ID</div>
            <div className="box-text">Joining Date</div>
            <div className="box-text">Role</div>
            <div className="box-text">Status</div>
            <div className="box-text">Experience</div>
            <div className="box-text">Action</div>
          </div>

          <ul className="create-box-wrapper">
            {employees ? (
              employees.map((employee) => {
                if (
                  (employee?.deletedAt==null  && statusValue === "A") ||
                  (employee?.deletedAt!=null  && statusValue === "I")||
                  (statusValue==="D")
                )
                
                  return (
                    <Link
                      to={`${employee?.id}`}
                      style={{
                        listStyle: "none",
                        textDecoration: "none  ",
                        color: "inherit",
                      }}
                      key={employee?.id}
                    >
                      <li className="create-box">
                        <div className="box-text">{employee?.name}</div>

                        <div className="box-text">{employee?.id}</div>
                        <div className="box-text">
                          {formatDate(employee?.createdAt)}
                        </div>
                        <div className="box-text">{employee?.role}</div>
                        <div className="box-text">
                          {employee?.deletedAt==null  ? (
                            <div className="status-active">Active</div>
                          ) : (
                            <div className="status-inactive">Inactive</div>
                          )}
                        </div>
                        <div className="box-text">1 years</div>
                        <div className="box-text-action">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3"
                            viewBox="0 0 16 16"
                            color="#FA4242"
                            onClick={(e) => handleDeleteClick(e, employee.id)}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil"
                            viewBox="0 0 16 16"
                            color="#10AAC0"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`edit/${employee.id}`);
                            }}
                          >
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                          </svg>
                        </div>
                      </li>
                    </Link>
                  );
                else return null;
              })
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <OrbitProgress
                  color="#318dcc"
                  size="medium"
                  text=""
                  textColor=""
                />
              </div>
            )}
          </ul>
        </div>
      </div>
      <ConfirmDelete
        deleteState={deleteState}
        onCancel={handleCancel}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default EmployeeList;
