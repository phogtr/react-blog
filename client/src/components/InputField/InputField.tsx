import { Box, createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        width: "25ch",
      },
    },
  })
);

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  type?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ textarea, ...props }) => {
  const [field, { error }] = useField(props);
  const classes = useStyles();
  console.log(classes);

  return (
    <Box pb={1.5}>
      {textarea ? (
        <TextField
          {...field}
          id={field.name}
          label={props.label}
          placeholder={props.placeholder}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
        ></TextField>
      ) : (
        <TextField
          {...field}
          error={error ? true : false}
          id={field.name}
          label={props.label}
          placeholder={props.placeholder}
          type={props.type}
          helperText={error ? error : null}
          autoComplete={props.autoComplete}
          fullWidth
          variant="outlined"
        />
      )}
    </Box>
  );
};
