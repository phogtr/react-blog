import { get } from "lodash";
import { Request, Response } from "express";
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import Post, { PostDocument } from "../model/post.model";

export async function createPostHandler(req: Request, res: Response) {
  const reqUserId = get(req, "user._id"); // deserializeUser set this
  const postObj: DocumentDefinition<PostDocument> = req.body;
  const post = await Post.create({ ...postObj, authorId: reqUserId });

  return res.send(post);
}

export async function getAllPostsHandler(_req: Request, res: Response) {
  const query: FilterQuery<PostDocument> = {};
  const findOptions: QueryOptions = { lean: true };

  const posts = await Post.find(query, {}, findOptions);

  if (!posts) {
    return res.sendStatus(404);
  }
  return res.send(posts);
}

export async function updatePostHandler(req: Request, res: Response) {
  const postId = req.params.postId;
  const query: FilterQuery<PostDocument> = { postId };
  const findOptions: QueryOptions = { lean: true };

  const post = await Post.find(query, {}, findOptions);

  if (!post) {
    return res.sendStatus(404);
  }

  const update: UpdateQuery<PostDocument> = req.body;
  const updateOptions: QueryOptions = { new: true };

  const updatedPost = await Post.findOneAndUpdate(query, update, updateOptions);

  return res.send(updatedPost);
}

export async function deletePostHandler(req: Request, res: Response) {
  const postId = req.params.postId;
  const query: FilterQuery<PostDocument> = { postId };
  const findOptions: QueryOptions = { lean: true };

  const post = await Post.find(query, {}, findOptions);

  if (!post) {
    return res.sendStatus(404);
  }

  await Post.deleteOne(query);
  return res.sendStatus(200);
}
