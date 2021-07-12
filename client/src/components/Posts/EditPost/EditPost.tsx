import { Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSinglePost } from "src/api/post/postApi";
import { InputField } from "src/components";
import { editPostRequest } from "src/redux/ducks/posts/action";
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
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  const { userData } = useContext(UserContext);
  let history = useHistory();

  useEffect(() => {
    getSinglePost(params.id).then((data) => {
      setPost(data);
      setPostLoaded(true);
    });
  }, []);

  if (!post) {
    return (
      <div>
        <h1>Could not find this post</h1>
      </div>
    );
  }

  if (postLoaded && userData?.userName !== post.author) {
    return (
      <div>
        <h1>Not Authorized</h1>
      </div>
    );
  }

  return (
    <>
      {!postLoaded ? (
        <h1>Loading........................</h1>
      ) : (
        <Formik
          initialValues={{ title: post.title, content: post.content }} // require conditional rendering to load initial value properly
          onSubmit={async (values: PostData, { setErrors }) => {
            dispatch(editPostRequest(params.id, values)); // do we really need redux for this?
            try {
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
              <InputField name="title" label="Title" placeholder="title" />
              <InputField name="content" label="Content" placeholder="text..." textarea />
              <button type="submit">Edit Post</button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
