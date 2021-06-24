import { object, string } from "yup";

export const createSessionSchema = object({
  body: object({
    email: string().email("Must be a valid email.").required("Please enter your email."),
    password: string()
      .required("Please enter your password.")
      .min(6, "Password is too short - it should be at least 6 characters.")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letter."),
  }),
});
