import express from "express";
import {
  getUsersController,
  createUserController,
  getUserByIdController,
  userLoginController,
} from "./user.controller.js";
import authentication from "../middleware/authenticarion.middleware.js";

export const route = express.Router();

route.get("/", getUsersController);
route.post("/", createUserController);
route.get("/:id", getUserByIdController);
route.post("/login", userLoginController, authentication);
