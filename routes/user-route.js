import { Router } from "express";
import { createUser } from "../controllers/user-controllers.js";

const userRoute = Router();

userRoute.post("/create-user", createUser);

export default userRoute;