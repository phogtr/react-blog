import { Express } from "express";
import { createUserHandler } from "../controller/user.controller";
import { createUserSchema } from "../validation/user.schema";
import validateRegister from "../middleware/validateRegister";

export default function (app: Express) {
  // create a user
  app.post("/api/createUser", validateRegister(createUserSchema), createUserHandler);
}
