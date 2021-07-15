import { Express } from "express";
import {
  createPostHandler,
  deletePostHandler,
  getAllPostsHandler,
  getSinglePostHandler,
  updatePostHandler,
} from "../controller/post.controller";
import requireUser from "../middleware/requireUser";
import validateRequest from "../middleware/validateRequest";
import { createPostSchema } from "../validation";

export default function (app: Express) {
  // create a post
  app.post("/api/createPost", [requireUser, validateRequest(createPostSchema)], createPostHandler);

  // get all posts
  app.get("/api/getPosts", getAllPostsHandler);

  // get single post
  app.get("/api/post/:postId", getSinglePostHandler);

  // update a post
  app.put("/api/post/:postId", [requireUser, validateRequest(createPostSchema)], updatePostHandler);

  //delete a post
  app.delete("/api/post/:postId", requireUser, deletePostHandler);
}
