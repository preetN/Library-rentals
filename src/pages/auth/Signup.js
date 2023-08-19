import React, { useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custominput/CustomInput";
function Signup() {
  const [form, setForm] = useState("");
  const inputs = [
    {
      label: "First Name",
      name: "fname",
      type: "text",
      placeholder: "First name",
      required: true,
    },
    {
      label: "Last Name",
      name: "lname",
      type: "text",
      placeholder: "Last name",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "04xxxxxxxx",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
      minLength: 6,
    },
    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "********",
      required: true,
      minLength: 6,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item) => (
            <CustomInput onChange={handleOnChange} {...item} />
          ))}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Signup;
