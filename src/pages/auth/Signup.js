import React, { useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custominput/CustomInput";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmpassword) {
      toast.error("Password and confirm password did not match");
      return;
    }
    try {
      const authSnapPromise = createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      toast.promise(authSnapPromise, { pending: "In Progress" });
      const authSnap = await authSnapPromise;
      if (authSnap.user.uid) {
        toast.success("new user created");
      }
    } catch (e) {
      console.log(e.message);
      if (e.message.includes("auth/email-already-in-use")) {
        toast.error("Email already in use, Try using different email");
      } else {
        toast.error(e.message);
      }
    }
  };
  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item, i) => (
            <CustomInput key={i} onChange={handleOnChange} {...item} />
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
