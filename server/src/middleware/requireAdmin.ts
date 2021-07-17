import { NextFunction, Request, Response } from "express";
import { get } from "lodash";

const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const isAdmin = get(req, "user.isAdmin");
  if (isAdmin !== true) {
    return res.sendStatus(403);
  }
  return next();
};

export default requireAdmin;
