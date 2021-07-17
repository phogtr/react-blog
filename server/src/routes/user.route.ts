import { Express } from "express";
import { createSessionHandler, invalidateSessionHandler } from "../controller/session.controller";
import { createUserHandler } from "../controller/user.controller";
import { validateRequest } from "../middleware";
import { createSessionSchema, createUserSchema } from "../validation";

export default function (app: Express) {
  // create a user
  app.post("/api/createUser", validateRequest(createUserSchema), createUserHandler);

  // login
  // 2 tokens: accessToken & refreshToken;
  // accessToken keep user login, after it's expired, user logout
  // refreshToken keep user login even accessToken was expired
  app.post("/api/login", validateRequest(createSessionSchema), createSessionHandler);

  // logout
  app.delete("/api/logout", invalidateSessionHandler);
}
