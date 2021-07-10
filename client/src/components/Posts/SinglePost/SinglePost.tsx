import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "src/config/axios";
import { deletePostRequest } from "src/redux/ducks/posts/action";
import { PostData } from "src/redux/ducks/posts/postsReducer";
import { UserContext } from "src/utils/UserContext";

interface SinglePostProps {}

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<SinglePostProps> = () => {
  const [singlePost, setSinglePost] = useState<PostData>({ title: "", content: "" });
  const params = useParams<RouteParams>();
  const { userData } = useContext(UserContext);
  const dispatch = useDispatch();

  // todo: move this to a separate file
  const getSinglePost = async () => {
    const res = await axios.get(`http://localhost:5000/api/post/${params.id}`);
    setSinglePost(res.data[0]);
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  if (!getSinglePost) {
    return (
      <div>
        <h1>Could not find this post</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>{singlePost.title}</h1>
        <div>{singlePost.content}</div>
        {userData?.userName === singlePost.author ? (
          <>
            <button onClick={() => dispatch(deletePostRequest(singlePost.postId!))}>Delete</button>
            <Link to={`/edit/${singlePost.postId}`}>
              <button>Edit</button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
