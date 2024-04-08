import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import {
  createUser,
  getUsers,
  getUserById,
  editUser,
  deleteUser,
} from "../controller/userController";

const user = new Hono();

user.get("/", getUsers)
  .post(createUser);

user.get("/:id", getUserById)
  .patch(editUser)
  .delete(deleteUser);

export default user;
