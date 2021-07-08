import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReduxReducer } from "src/redux/configureStore";
import { getSinglePostRequest } from "src/redux/ducks/posts/action";
import { PostDataState } from "src/redux/ducks/posts/postsReducer";

interface SinglePostProps {}

interface RouteParams {
  id: string;
}

export const SinglePost: React.FC<SinglePostProps> = () => {
  // const [post, setPost] = useState<PostData>({ title: "", content: "" });
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  const post: PostDataState = useSelector((state: ReduxReducer) => state.posts);
  console.log(post);

  // const getPost = async () => {
  //   const res = await axios.get(`http://localhost:5000/api/post/${params.id}`);
  //   setPost(res.data[0]);
  // };

  useEffect(() => {
    dispatch(getSinglePostRequest(params.id));
  }, []);

  if (post.posts.length <= 0) {
    return (
      <div>
        <h1>Could not find this post</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.posts[0].title}</h1>
      <div>{post.posts[0].content}</div>
    </div>
  );
};
