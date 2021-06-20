import { Express } from "express";
import { createPostHandler } from "../controller/post.controller";

export const postRoutes = (app: Express) => {
  app.post("/api/posts", createPostHandler);
};
