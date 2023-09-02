import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import CustomInput from "../../components/custominput/CustomInput";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";
function ResetPassword() {
  const [form, setForm] = useState({});
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "email@email.com",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email } = form;

    sendPasswordResetEmail(auth, email)
      .then((res) => {
        toast.success("Reset successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item) => (
            <CustomInput onChange={handleOnChange} {...item} />
          ))}
          <Button variant="primary" type="submit">
            Reset Password
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default ResetPassword;
