import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import { InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";
import { UserContext } from "../../utils/UserContext";
import axios from "../../config/axios";

interface LoginProps {}

interface LoginData {
  email: string;
  password: string;
}

const loginRequest = async (data: LoginData) => {
  const res = await axios.post("http://localhost:5000/api/login", data);
  return await res.data;
};

export const Login: React.FC<LoginProps> = () => {
  const { setUser } = useContext(UserContext);
  let history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values: LoginData, { setErrors }) => {
        try {
          const data = await loginRequest(values);
          setUser(data);
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
