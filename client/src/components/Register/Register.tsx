import React from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import { InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";

interface RegisterProps {}

const reqisterRequest = async (data: object) => {
  return await axios.post("http://localhost:5000/api/createUser", data);
};

export const Register: React.FC<RegisterProps> = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        console.log(values);
        try {
          await reqisterRequest(values);
        } catch (error) {
          // console.log(error.response.data);
          setErrors(toErrorMap(error.response.data));
        }
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
