import { Express } from "express";
import {
  deleteUserHandler,
  getAllUsersHandler,
  updateUserHandler,
} from "../controller/admin.controller";
import { requireAdmin } from "../middleware";

export default function (app: Express) {
  // get all users
  app.get("/api/admin/getUsers", requireAdmin, getAllUsersHandler);

  // update a users
  app.put("/api/admin/:userId", requireAdmin, updateUserHandler);

  // delete a user
  app.delete("/api/admin/:userId", requireAdmin, deleteUserHandler);
}
