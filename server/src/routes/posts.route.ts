import { Express } from "express";
import { createPostHandler } from "../controller/post.controller";

export default function (app: Express) {
  app.post("/api/posts", createPostHandler);
}
