import { Request, Response } from "express";
import { FilterQuery, QueryOptions } from "mongoose";
import User, { UserDocument } from "../model/user.model";

export async function getAllUsersHandler(_req: Request, res: Response) {
  const query: FilterQuery<UserDocument> = {};
  const findOptions: QueryOptions = { lean: true };

  const users = await User.find(query, {}, findOptions).sort({ updatedAt: -1 });

  if (!users) {
    return res.sendStatus(404);
  }
  return res.send(users);
}

export async function deleteUserHandler(req: Request, res: Response) {
  const userId = req.params.userId;
  const query: FilterQuery<UserDocument> = { userId };
  const findOptions: QueryOptions = { lean: true };

  const user = await User.findOne(query, {}, findOptions);

  if (!user) {
    return res.sendStatus(404);
  }

  await User.deleteOne(query);
  return res.sendStatus(200);
}

export async function updateUserHandler(req: Request, res: Response) {
  const userId = req.params.userId;
  const query: FilterQuery<UserDocument> = { userId };
  const findOptions: QueryOptions = { lean: true };

  const user = await User.findOne(query, {}, findOptions);

  if (!user) {
    return res.sendStatus(404);
  }

  await User.updateOne(query, { isAdmin: !user.isAdmin });

  return res.sendStatus(200);
}
