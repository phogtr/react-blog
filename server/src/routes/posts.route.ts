import { Express } from "express";
import { createPostHandler } from "../controller/post.controller";

export default function (app: Express) {
  // create post
  app.post("/api/createPost", createPostHandler);
}
