import React from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import { InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";

interface LoginProps {}

const loginRequest = async (data: object) => {
  return await axios.post("http://localhost:5000/api/login", data);
};

export const Login: React.FC<LoginProps> = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        console.log(values);
        try {
          const res = await loginRequest(values);
          console.log(res);
        } catch (error) {
          setErrors(toErrorMap(error.response.data));
        }
      }}
    >
      {() => (
        <Form>
          <InputField name="email" placeholder="Email" />
          <InputField name="password" placeholder="Password" type="password" />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};
