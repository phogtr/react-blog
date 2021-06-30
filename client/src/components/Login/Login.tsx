import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import { InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";
import axios from "axios";

interface LoginProps {}

const loginRequest = async (data: object) => {
  return await axios.post("http://localhost:5000/api/login", data);
};

export const Login: React.FC<LoginProps> = () => {
  let history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        console.log(values);
        try {
          const res = await loginRequest(values);
          console.log(res);
          history.push("/");
        } catch (error) {
          setErrors(toErrorMap(error.response.data));
        }
      }}
    >
      {() => (
        <Form>
          <InputField name="email" placeholder="Email" />
          <InputField name="password" placeholder="Password" type="password" autoComplete="off" />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};
