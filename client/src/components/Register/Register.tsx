import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { reqisterRequest } from "src/api/user/userApi";
import { InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        // console.log(values);
        try {
          await reqisterRequest(values);
          history.push("/login");
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
          <InputField name="password" placeholder="Password" type="password" autoComplete="off" />
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};
