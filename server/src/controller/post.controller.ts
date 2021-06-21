import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import Post, { PostDocument } from "../model/post.model";

export async function createPostHandler(req: Request, res: Response) {
  let { title, content } = req.body;

  const postObj: DocumentDefinition<PostDocument> = new Post({
    title,
    content,
  });

  const post = await Post.create(postObj);

  return res.send(post);
}
