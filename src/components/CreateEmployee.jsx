/* eslint-disable react/prop-types */
import "../styles/CreateEmployee.css";
import Button from "./Button";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { Roles, Deparments, Status } from "../utils/constants";
// import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import { addList } from "../store/actions";
import { useCreateMutation } from "./createApi";
// import formatDate from "../utils/formatDate";
import { useNavigate } from "react-router-dom";
const CreateEmployee = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormData = {
    name: "",
    email: "",
    address: { line1: "", pincode: "" },
    password: "",
    role: "",
    department: 0,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [createEmployee, createResponse] = useCreateMutation();

  useEffect(() => {
    if (createResponse.isSuccess) navigate("../employee");
  }, [createResponse, navigate]);
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    if (name === "line1" || name === "pincode") {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else if (name === "department") {
      setFormData({
        ...formData,
        department: parseInt(value),
      });
    } else if (name === "createdAt") {
      const date = new Date(value);
      setFormData({ ...formData, [name]: date.toISOString() });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <div className="employee-details">
      <div className="create-employee-header">Create Employee</div>

      <div className="grid-and-buttons">
        <div className="create-grid">
          <Input
            label="Employee Name"
            type="text"
            placeholder="Employee Name"
            handleChange={handleChange}
            name="name"
            value={formData.name}
          ></Input>
          <Input
            label="Email"
            type="text"
            placeholder="Email"
            handleChange={handleChange}
            name="email"
            value={formData.email}
          ></Input>
          <Input
            label="Password"
            type="text"
            placeholder="Password"
            handleChange={handleChange}
            name="password"
            value={formData.password}
          ></Input>
          <Dropdown
            label="Department"
            options={Deparments}
            handleChange={handleChange}
            name="department"
            value={formData.department}
          />
          <Dropdown
            label="Roles"
            options={Roles}
            handleChange={handleChange}
            name="role"
            value={formData.role}
          />
          <Dropdown
            label="Status"
            options={Status}
            handleChange={handleChange}
          />
          <div className="item8">
            <Input
              label="Address"
              type="text"
              placeholder="Address Line 1"
              handleChange={handleChange}
              name="line1"
              value={formData.address.line1}
            ></Input>
            <Input
              label=""
              type="text"
              placeholder="Pincode"
              handleChange={handleChange}
              name="pincode"
              value={formData.address.pincode}
            ></Input>
          </div>
        </div>

        <div className="buttons">
          <Button label="Create" color="blue" handleClick={handleSubmit} />
          <Button label="Cancel" color="white" />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
