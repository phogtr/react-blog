import { Request, Response } from "express";
import { jwtSign } from "../utils/jwt.utils";
import config from "../config/key";
import User, { UserDocument } from "../model/user.model";
import Session from "../model/session.model";

export async function createSessionHandler(req: Request, res: Response) {
  // validate email and password
  let { email, password }: { email: UserDocument["email"]; password: string } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).send("Invalid email");
  }

  const checkPassword = await user.comparePassword(password);

  if (!checkPassword) {
    return res.status(401).send("Invalid Password");
  }

  const userJson = await user.toJSON();

  // create a session
  const session = await Session.create({ user: userJson._id, userAgent: req.get("user-agent") });
  const sessionJson = await session.toJSON();

  // create access token
  const accessToken = jwtSign(
    { userJson, session: sessionJson._id },
    { expiresIn: config.accessTokenTime }
  );

  // create refresh token
  const refreshToken = jwtSign(sessionJson, { expiresIn: config.refreshTokenTime });

  //send refresh & access token back
  return res.send({ accessToken, refreshToken });
}
