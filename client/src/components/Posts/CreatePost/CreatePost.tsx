import { Box, Button, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputField } from "src/components";
import { createPostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
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
        <>
          <Box pb={2}>
            <Typography variant="h4">Create a Post</Typography>
          </Box>
          <Form>
            <InputField name="title" label="Title" placeholder="title" />
            <InputField name="content" label="Content" placeholder="text..." textarea />
            <Box py={2}>
              <Button type="submit" variant="outlined" color="primary">
                Create Post
              </Button>
            </Box>
          </Form>
        </>
      )}
    </Formik>
  );
};
