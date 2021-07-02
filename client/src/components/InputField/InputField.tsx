import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({ textarea, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      {textarea ? (
        <textarea {...field} id={field.name} placeholder={props.placeholder}></textarea>
      ) : (
        <input {...field} {...props} id={field.name} placeholder={props.placeholder} />
      )}

      {error ? <p>{error}</p> : null}
    </div>
  );
};
