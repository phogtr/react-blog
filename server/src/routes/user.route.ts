import { Express } from "express";
import { createUserHandler } from "../controller/user.controller";
import { createSessionHandler } from "../controller/session.controller";
import { createUserSchema, createSessionSchema } from "../validation";
import validateRequest from "../middleware/validateRequest";

export default function (app: Express) {
  // create a user
  app.post("/api/createUser", validateRequest(createUserSchema), createUserHandler);

  // Login
  // 2 tokens: accessToken & refreshToken;
  // accessToken keep user login, after it's expired, user logout
  // refreshToken keep user login even accessToken was expired
  app.post("/api/login", validateRequest(createSessionSchema), createSessionHandler);
}
