import React from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import { InputField } from "..";

interface RegisterProps {}

const reqisterRequest = async (data: object) => {
  const res = await axios.post("http://localhost:5000/api/createUser", data);
  console.log(res);
};

export const Register: React.FC<RegisterProps> = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
        reqisterRequest(values);
      }}
    >
      {() => (
        <Form>
          <InputField name="name" placeholder="Display Name" />
          <InputField name="email" placeholder="Email" />
          <InputField name="password" placeholder="Password" type="password" />
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};
