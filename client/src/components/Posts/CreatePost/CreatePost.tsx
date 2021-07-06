import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../config/axios";
import { toErrorMap } from "../../../utils/toErrorMap";
import { InputField } from "../../index";
import { PostData } from "../Posts";

interface CreatePostProps {}

const createPostHandler = async (data: PostData) => {
  return await axios.post("http://localhost:5000/api/createPost", data);
};

export const CreatePost: React.FC<CreatePostProps> = () => {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      onSubmit={async (values: PostData, { setErrors }) => {
        // console.log(values);
        try {
          await createPostHandler(values);
          history.push("/");
        } catch (error) {
          setErrors(toErrorMap(error.response.data));
        }
      }}
    >
      {() => (
        <Form>
          <InputField name="title" placeholder="title" />
          <InputField name="content" placeholder="text..." textarea />
          <button type="submit">Create Post</button>
        </Form>
      )}
    </Formik>
  );
};