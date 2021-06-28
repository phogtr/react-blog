import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "..";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
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
