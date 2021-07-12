import { Box, TextField } from "@material-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  type?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ textarea, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <Box pb={1.5}>
      {textarea ? (
        <textarea {...field} id={field.name} placeholder={props.placeholder}></textarea>
      ) : (
        <TextField
          {...field}
          error={error ? true : false}
          label={props.label}
          id={field.name}
          placeholder={props.placeholder}
          type={props.type}
          helperText={error ? error : null}
          autoComplete={props.autoComplete}
        />
      )}
    </Box>
  );
};
