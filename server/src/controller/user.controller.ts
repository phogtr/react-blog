import { DocumentDefinition } from "mongoose";
import { Request, Response } from "express";
import { omit } from "lodash";
import User, { UserDocument } from "../model/user.model";

export async function createUserHandler(req: Request, res: Response) {
  try {
    let userObj: DocumentDefinition<UserDocument> = req.body;
    const user = await User.create(userObj);

    return res.send(omit(user.toJSON(), "password")); // don't send password field
  } catch (error) {
    return res.send(400).send(error.message);
  }
}
