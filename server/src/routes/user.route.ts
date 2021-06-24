import { Express } from "express";
import { createUserHandler } from "../controller/user.controller";
import { createUserSchema } from "../validation/user.schema";
import validateRequest from "../middleware/validateRequest";

export default function (app: Express) {
  // create a user
  app.post("/api/createUser", validateRequest(createUserSchema), createUserHandler);
}
