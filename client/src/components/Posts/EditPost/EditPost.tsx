import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editPostHandler, getSinglePost } from "src/api/post/postApi";
import { InputField } from "src/components";
import { DialogConfirm } from "src/components/utils/DialogConfirm/DialogConfirm";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { toErrorMap } from "src/utils/toErrorMap";
import { UserContext } from "src/utils/UserContext";

interface EditPostProps {}

interface RouteParams {
  id: string;
}

export const EditPost: React.FC<EditPostProps> = () => {
  const [postLoaded, setPostLoaded] = useState(Boolean); // Conditional rendering
  const [post, setPost] = useState<PostData>({ title: "", content: "" });
  const [openDialog, setOpenDialog] = React.useState(false);
  const params = useParams<RouteParams>();

  const { userData } = useContext(UserContext);
  let history = useHistory();

  useEffect(() => {
    getSinglePost(params.id).then((data) => {
      setPost(data);
      setPostLoaded(true);
    });
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    history.push("/");
  };

  if (!post) {
    return (
      <>
        <Typography variant="h3" component="h1">
          Could not find this post
        </Typography>
      </>
    );
  }

  if (postLoaded && userData?.userName !== post.author) {
    return (
      <>
        <Typography variant="h3" component="h1">
          Not Authorized
        </Typography>
      </>
    );
  }

  return (
    <>
      {!postLoaded ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <Formik
          initialValues={{ title: post.title, content: post.content }} // require conditional rendering to load initial value properly
          onSubmit={async (values: PostData, { setErrors }) => {
            try {
              await editPostHandler(params.id, values);
              setOpenDialog(true);
            } catch (error) {
              setErrors(toErrorMap(error.response.data));
            }
          }}
        >
          {() => (
            <>
              <Box pb={2}>
                <Typography variant="h4">Update a Post</Typography>
              </Box>
              <Form>
                <InputField name="title" label="Title" placeholder="title" />
                <InputField name="content" label="Content" placeholder="text..." textarea />
                <Box py={2}>
                  <Button type="submit" variant="outlined" color="primary">
                    Update Post
                  </Button>
                </Box>
              </Form>
              <DialogConfirm
                openDialog={openDialog}
                prompt={"Post Updated Successfully"}
                handleCloseDialog={handleCloseDialog}
                handleCloseDialogConfirm={handleCloseDialog}
              />
            </>
          )}
        </Formik>
      )}
    </>
  );
};
