import { Form, Formik } from "formik";
import { InputField } from "../../index";
import { toErrorMap } from "../../../utils/toErrorMap";
import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";

interface EditPostProps {}

interface PostData {
  title: string;
  content: string;
}

interface RouteParams {
  id: string;
}

const editPostHandler = async (id: string, data: PostData) => {
  return await axios.put(`http://localhost:5000/api/post/${id}`, data);
};

export const EditPost: React.FC<EditPostProps> = ({}) => {
  const [postLoaded, setPostLoaded] = useState(Boolean); // Conditional rendering
  const [post, setPost] = useState<PostData>({ title: "", content: "" });
  const params = useParams<RouteParams>();
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
            try {
              await editPostHandler(params.id, values);
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
              <button type="submit">Edit Post</button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
