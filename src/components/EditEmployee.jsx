/* eslint-disable react/prop-types */
import "../styles/CreateEmployee.css";
import Button from "./Button";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { Roles, Deparments, Status } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import formatDate from "../utils/formatDate";
import { useGetByIdQuery } from "./getByIdApi";
import { useEditMutation } from "./editApi";

const EditEmployee = () => {
  // const [employee, setEmployee] = useState();
  const { id } = useParams();
  const { data } = useGetByIdQuery(id);

  const [formData, setFormData] = useState();
  const [editEmployee, editResponse] = useEditMutation();
  useEffect(() => {
    if (data) {
      const employee = {
        id:data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        address: {
          line1: data.address.line1,
          pincode: data.address.pincode,
        },
        department: parseInt(data.department.id),
      };
      setFormData(employee);
    }
  }, [data]);
  // useEffect(() => {
  //   fetch(`http://localhost:3000/employee/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setEmployee(res));
  // });
  // return (
  //   <div className="employee-details">
  //     <div className="create-employee-header">Edit Employee</div>

  //     <div className="grid-and-buttons">
  //       <div className="create-grid">
  //         <Input
  //           label="Employee Name"
  //           type="text"
  //           placeholder={formData.name}

  //         ></Input>
  //         <Input
  //           label="Joining Date"
  //           type="text"
  //           placeholder={formatDate(employee?.createdAt)}

  //         ></Input>
  //         <Input
  //           label="Experience(Yrs)"
  //           type="text"

  //         ></Input>
  //         <Dropdown label="Department" options={Deparments} />
  //         <Dropdown label="Roles" options={Roles} />
  //         <Dropdown label="Status" options={Status} />
  //         <Input
  //           label="Employee ID"
  //           type="text"
  //           placeholder={employee?.id}
  //           disabled="true"
  //         ></Input>
  //         <div className="item8">
  //           <Input
  //             label="Address"
  //             type="text"
  //             placeholder="Flat No./ House No."
  //           ></Input>

  //           <Input label="" type="text" placeholder="Address line 1"></Input>
  //           <Input label="" type="text" placeholder="Address line 2"></Input>
  //         </div>
  //       </div>
  //       <div className="buttons">
  //         <Button label="Save" color="blue" />
  //         <Button label="Cancel" color="white" />
  //       </div>
  //     </div>
  //   </div>
  // );
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  useEffect(() => {
    if (editResponse.isSuccess) console.log(editResponse);
  }, [editResponse]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await editEmployee(formData);
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
      <div className="create-employee-header">Edit Employee</div>

      <div className="grid-and-buttons">
        {formData && (
          <div className="create-grid">
            <Input
              label="Employee Name"
              type="text"
              placeholder={formData.name}
              handleChange={handleChange}
              name="name"
              value={formData.name}
            ></Input>
            <Input
              label="Email"
              type="text"
              placeholder={formData.email}
              handleChange={handleChange}
              name="email"
              value={formData.email}
            ></Input>
            <Input label="Experience(Yrs)" type="text"></Input>
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
            <Input
              label="Employee ID"
              type="text"
              placeholder={id}
              disabled={true}
            ></Input>
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
        )}

        <div className="buttons">
          <Button label="Save" color="blue" handleClick={handleSubmit} />
          <Button label="Cancel" color="white" />
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
