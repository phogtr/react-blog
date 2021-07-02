import React from "react";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { InputField } from "../index";
import axios from "axios";

interface CreatePostProps {}

const createPostHandler = async (data: object) => {
  return await axios.post("http://localhost:5000/api/createPost", data);
};

export const CreatePost: React.FC<CreatePostProps> = ({}) => {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ title: "", text: "" }}
      onSubmit={async (values, { setErrors }) => {
        console.log(values);
        try {
          await createPostHandler(values);
          history.push("/");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {() => (
        <Form>
          <InputField name="title" placeholder="title" />
          <InputField name="text" placeholder="text..." textarea />
          <button type="submit">Create Post</button>
        </Form>
      )}
    </Formik>
  );
};
