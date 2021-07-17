import { Express } from "express";
import { deleteUserHandler, getAllUsersHandler } from "../controller/admin.controller";
import { requireAdmin } from "../middleware";

export default function (app: Express) {
  // get all users
  app.get("/api/admin/getUsers", requireAdmin, getAllUsersHandler);

  //delete a user
  app.delete("/api/admin/:userId", requireAdmin, deleteUserHandler);
}
