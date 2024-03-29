import { Box, Button, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { createPostHandler } from "src/api/post/postApi";
import { DialogConfirm, InputField } from "src/components";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { toErrorMap } from "src/utils/toErrorMap";

interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  let history = useHistory();

  const handleCloseDialog = () => {
    setOpenDialog(false);
    history.push("/");
  };

  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      onSubmit={async (values: PostData, { setErrors }) => {
        try {
          await createPostHandler(values);
          setOpenDialog(true);
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
          <DialogConfirm
            openDialog={openDialog}
            prompt={"Post Created Successfully"}
            handleCloseDialog={handleCloseDialog}
            handleCloseDialogConfirm={handleCloseDialog}
          />
        </>
      )}
    </Formik>
  );
};
