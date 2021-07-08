import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { InputField } from "src/components";
import axios from "src/config/axios";
import { editPostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { toErrorMap } from "src/utils/toErrorMap";

interface EditPostProps {}

interface RouteParams {
  id: string;
}

export const EditPost: React.FC<EditPostProps> = () => {
  const [postLoaded, setPostLoaded] = useState(Boolean); // Conditional rendering
  const [post, setPost] = useState<PostData>({ title: "", content: "" });
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  let history = useHistory();

  const getPost = async () => {
    const res = await axios.get(`http://localhost:5000/api/post/${params.id}`);
    setPost(res.data[0]);
    setPostLoaded(true);
  };

  useEffect(() => {
    getPost();
  }, []);

  if (!post) {
    return (
      <div>
        <h1>Could not find this post</h1>
      </div>
    );
  }

  return (
    <>
      {!postLoaded ? (
        <div>Loading</div>
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
              <InputField name="title" placeholder="title" />
              <InputField name="content" placeholder="text..." textarea />
              <button type="submit">Edit Post</button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
