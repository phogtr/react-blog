import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({ ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <div>
      <input {...field} {...props} id={field.name} placeholder={props.placeholder} />
      {error ? <p>{error}</p> : null}
    </div>
  );
};
