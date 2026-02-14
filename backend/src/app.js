import express from "express";
import { router } from "./routes.js";
import cors from "cors"


export const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(router);
