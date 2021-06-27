import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { jwtDecode } from "../utils/jwt.utils";
import { renewAccessToken } from "../controller/session.controller";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  // https://security.stackexchange.com/questions/108662/why-is-bearer-required-before-the-token-in-authorization-header-in-a-http-re
  const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");
  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) return next();

  const { decoded, expired } = jwtDecode(accessToken);

  // access token hasn't expired yet
  if (decoded) {
    // @ts-ignore
    req.user = decoded;

    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await renewAccessToken(refreshToken);

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);

      const { decoded } = jwtDecode(newAccessToken);

      // @ts-ignore
      req.user = decoded;
    }
    return next();
  }
  return next();
};

export default deserializeUser;
