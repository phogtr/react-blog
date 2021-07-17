import { Request, Response } from "express";
import { get } from "lodash";
import config from "../config/key";
import Session from "../model/session.model";
import User, { UserDocument } from "../model/user.model";
import { jwtSign } from "../utils/jwt.utils";

export async function createSessionHandler(req: Request, res: Response) {
  // validate email and password
  let { email, password }: { email: UserDocument["email"]; password: string } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).send({
      errorMessage: ["Email is invalid"],
      path: "body.email",
    });
  }

  const checkPassword = await user.comparePassword(password);

  if (!checkPassword) {
    return res.status(401).send({
      errorMessage: ["Password is invalid"],
      path: "body.password",
    });
  }

  const userJson = user.toJSON();
  const userName = userJson.name;
  const userId = userJson._id;

  // create a session
  const session = await Session.create({ user: userId, userAgent: req.get("user-agent") });
  const sessionJson = session.toJSON();

  // create access token
  const accessToken = jwtSign(
    { ...userJson, session: sessionJson._id },
    { expiresIn: config.accessTokenTime }
  );

  // create refresh token
  // const refreshToken = jwtSign(sessionJson, { expiresIn: config.refreshTokenTime });

  //send refresh & access token back
  // return res.send({ accessToken, refreshToken, userName });
  return res.send({ accessToken, userId, userName });
}

// renew access token
// export async function renewAccessToken(refreshToken: string) {
//   const { decoded } = jwtDecode(refreshToken);
//   console.log(decoded);

//   if (!decoded) return false;

//   // find session from the refresh token - line 37 above
//   const session = await Session.findById(get(decoded, "_id"));

//   if (!session || !session?.valid) return false; // valid true mean still login, false => logout
//   const sessionJson = await session.toJSON();

//   const user = await findUser({ _id: sessionJson.user });

//   if (!user) return false;

//   const accessToken = jwtSign(
//     { ...user, session: sessionJson._id },
//     { expiresIn: config.accessTokenTime }
//   );

//   return accessToken;
// }

export async function invalidateSessionHandler(req: Request, res: Response) {
  const sessionId = get(req, "user.session"); // from deserializedUser => req.user = decoded

  await Session.updateOne({ _id: sessionId }, { valid: false });
  await Session.deleteOne({ _id: sessionId });

  return res.sendStatus(200);
}
