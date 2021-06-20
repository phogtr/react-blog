import { Request, Response } from "express";
import Post from "../model/post.model";

export async function createPostHandler(req: Request, res: Response) {
  let { title, content } = req.body;

  const postObj = new Post({
    title,
    content,
  });

  const post = await Post.create(postObj);

  return res.send(post);
}
