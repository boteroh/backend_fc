import { Router } from "express";
import { createUser, findUser, changeStatus, updateUser } from "../controllers/user-controllers.js";

const userRoute = Router();

userRoute.post("/create-user", createUser);
userRoute.get("/find-user", findUser);
userRoute.put("/status", changeStatus);
userRoute.put("/update", updateUser);

export default userRoute;