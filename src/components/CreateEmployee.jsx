/* eslint-disable react/prop-types */
import "../styles/CreateEmployee.css";
import Button from "./Button";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { Roles, Deparments, Status } from "../utils/constants";
const CreateEmployee = () => {
  return (
    <div className="employee-details">
      <div className="create-employee-header">Create Employee</div>
      
      <div className="grid-and-buttons">
        <div className="create-grid">
          <Input
            label="Employee Name"
            type="text"
            placeholder="Employee Name"
          ></Input>
          <Input
            label="Joining Date"
            type="text"
            placeholder="Joining Date"
          ></Input>
          <Input label="Experience(Yrs)" type="text" placeholder="2"></Input>
          <Dropdown label="Departments" options={Deparments} />
          <Dropdown label="Roles" options={Roles} />
          <Dropdown label="Status" options={Status} />
          <div className="item8">
            <Input
              label="Address"
              type="text"
              placeholder="Flat No./ House No."
            ></Input>
            <Input label="" type="text" placeholder="Address line 1"></Input>
            <Input label="" type="text" placeholder="Address line 2"></Input>
          </div>
        </div>
        <div className="buttons">
          <Button label="Create" color="blue" />
          <Button label="Cancel" color="white" />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
