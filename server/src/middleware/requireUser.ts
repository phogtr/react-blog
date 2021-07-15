import { NextFunction, Request, Response } from "express";
import { get } from "lodash";

const requireUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = get(req, "user._id");
  if (!user) {
    return res.sendStatus(403);
  }
  return next();
};

export default requireUser;
