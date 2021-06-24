import jwt from "jsonwebtoken";
import config from "../config/key";

const privateKey = config.privateKey as string;

export function jwtSign(object: Object, options: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}
