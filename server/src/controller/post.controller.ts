import { Request, Response } from "express";
import { get } from "lodash";
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import Post, { PostDocument } from "../model/post.model";

export async function createPostHandler(req: Request, res: Response) {
  const reqUsername = get(req, "user.name"); // deserializeUser set this
  const reqUserId = get(req, "user._id");
  const postObj: DocumentDefinition<PostDocument> = req.body;
  const post = await Post.create({ ...postObj, authorId: reqUserId, author: reqUsername });

  return res.send(post);
}

export async function getAllPostsHandler(_req: Request, res: Response) {
  const query: FilterQuery<PostDocument> = {};
  const findOptions: QueryOptions = { lean: true };

  const posts = await Post.find(query, {}, findOptions).sort({ updatedAt: -1 });

  if (!posts) {
    return res.sendStatus(404);
  }
  return res.send(posts);
}

export async function getSinglePostHandler(req: Request, res: Response) {
  const postId = req.params.postId;
  const query: FilterQuery<PostDocument> = { postId };
  const findOptions: QueryOptions = { lean: true };

  const post = await Post.find(query, {}, findOptions);

  if (!post) {
    return res.sendStatus(404);
  }
  return res.send(post);
}

export async function updatePostHandler(req: Request, res: Response) {
  const reqUserId = get(req, "user._id");
  const postId = req.params.postId;
  const query: FilterQuery<PostDocument> = { postId };
  const findOptions: QueryOptions = { lean: true };

  const post = await Post.findOne(query, {}, findOptions);

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.authorId) !== reqUserId) {
    return res.sendStatus(401);
  }

  const update: UpdateQuery<PostDocument> = req.body;
  const updateOptions: QueryOptions = { new: true };

  const updatedPost = await Post.findOneAndUpdate(query, update, updateOptions);

  return res.send(updatedPost);
}

export async function deletePostHandler(req: Request, res: Response) {
  const reqUserId = get(req, "user._id");
  const reqUserAdmin = get(req, "user.isAdmin");
  const postId = req.params.postId;
  const query: FilterQuery<PostDocument> = { postId };
  const findOptions: QueryOptions = { lean: true };

  const post = await Post.findOne(query, {}, findOptions);

  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.authorId) !== reqUserId && reqUserAdmin === false) {
    return res.sendStatus(401);
  }

  await Post.deleteOne(query);
  return res.sendStatus(200);
}
