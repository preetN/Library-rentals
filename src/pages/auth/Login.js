import React, { useState } from "react";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/custominput/CustomInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";
function Login() {
  const [form, setForm] = useState("");

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
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const signInPromise = signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      toast.promise(signInPromise, { pending: "In Progress" });
      const signInValue = await signInPromise;
      toast.success("Logging In");
    } catch (e) {
      if (e.message.includes("auth/wrong-password")) {
        toast.error("Invalid Password");
      } else {
        toast.error(e.message);
      }
    }
  };
  return (
    <DefaultLayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item) => (
            <CustomInput onChange={handleOnChange} {...item} />
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
