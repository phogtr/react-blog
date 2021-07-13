import { Box, Button, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginData, loginRequest } from "src/api/user/userApi";
import { InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";
import { UserContext } from "../../utils/UserContext";

interface LoginProps {}

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
        <>
          <Box pb={2}>
            <Typography variant="h4">Login</Typography>
          </Box>
          <Form autoComplete="off">
            <InputField name="email" label="Email" placeholder="Email" />
            <InputField
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              autoComplete="off"
            />
            <Box py={2}>
              <Button type="submit" variant="outlined" color="primary">
                Login
              </Button>
            </Box>
          </Form>
        </>
      )}
    </Formik>
  );
};
