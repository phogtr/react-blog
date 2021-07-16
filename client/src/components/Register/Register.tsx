import { Box, Button, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { RegisterData, reqisterRequest } from "src/api/user/userApi";
import { DialogConfirm, InputField } from "..";
import { toErrorMap } from "../../utils/toErrorMap";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  let history = useHistory();

  const handleCloseDialog = () => {
    setOpenDialog(false);
    history.push("/login");
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={async (values: RegisterData, { setErrors }) => {
        try {
          await reqisterRequest(values);
          setOpenDialog(true);
        } catch (error) {
          setErrors(toErrorMap(error.response.data));
        }
      }}
    >
      {() => (
        <>
          <Box pb={2}>
            <Typography variant="h4">Register</Typography>
          </Box>
          <Form autoComplete="off">
            <InputField name="name" label="Name" placeholder="Username" />
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
                Register
              </Button>
            </Box>
          </Form>
          <DialogConfirm
            openDialog={openDialog}
            prompt={"User Registered Successfully"}
            handleCloseDialog={handleCloseDialog}
            handleCloseDialogConfirm={handleCloseDialog}
          />
        </>
      )}
    </Formik>
  );
};
