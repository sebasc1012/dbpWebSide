import express from "express";
import { getUsersController, createUserController } from "./user.controller.js";

export const route = express.Router();

route.get("/", getUsersController);
route.post("/", createUserController);
