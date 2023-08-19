import React from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custominput/CustomInput";
function Login() {
  const inputs = [
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
    },
  ];
  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form>
          {inputs.map((item) => (
            <CustomInput {...item} />
          ))}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Login;
