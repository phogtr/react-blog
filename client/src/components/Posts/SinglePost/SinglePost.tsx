import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSinglePost } from "src/api/post/postApi";
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

  useEffect(() => {
    getSinglePost(params.id).then((data) => {
      setSinglePost(data);
    });
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
