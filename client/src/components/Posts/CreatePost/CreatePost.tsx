import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputField } from "src/components";
import { createPostRequest, PostData } from "src/redux/ducks/posts";
import { toErrorMap } from "src/utils/toErrorMap";

interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      onSubmit={async (values: PostData, { setErrors }) => {
        try {
          dispatch(createPostRequest(values));
          // temporary timeout so the UI can update accordingly
          setTimeout(() => {
            history.push("/");
          }, 1000);
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
