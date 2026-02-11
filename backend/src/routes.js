import express from "express";
import { route } from "./users/user.routes.js";

export const router = express.Router();
const userRoutes = route;

router.use("/users", userRoutes);
