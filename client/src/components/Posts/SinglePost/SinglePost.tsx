import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "src/config/axios";
import { ReduxReducer } from "src/redux/configureStore";
import { getSinglePostRequest } from "src/redux/ducks/posts/action";
import { PostData, PostDataState } from "src/redux/ducks/posts/postsReducer";

interface SinglePostProps {}

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<SinglePostProps> = () => {
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  const post: PostDataState = useSelector((state: ReduxReducer) => state.posts);

  const [apiPost, setApiPost] = useState<PostData>({ title: "", content: "" }); // handle case of navigating through the url (redux state empty at this point)

  // todo: move this to a separate file
  const getPost = async () => {
    const res = await axios.get(`http://localhost:5000/api/post/${params.id}`);
    setApiPost(res.data[0]);
  };

  useEffect(() => {
    if (post.posts.length <= 0) {
      getPost();
    } else {
      dispatch(getSinglePostRequest(params.id));
    }
  }, []);

  if (!apiPost) {
    return (
      <div>
        <h1>Could not find this post</h1>
      </div>
    );
  }

  return (
    <>
      {post.posts.length === 1 ? (
        <div>
          <h1>{post.posts[0].title}</h1>
          <div>{post.posts[0].content}</div>
        </div>
      ) : (
        <div>
          <h1>{apiPost.title}</h1>
          <div>{apiPost.content}</div>
          <h3>API Post</h3>
        </div>
      )}
    </>
  );
};
