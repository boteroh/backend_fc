import { Router } from "express";
import { createOrder, findOrder, listOrders, editOrder, deleteOrder } from "../controllers/order-controllers.js";

const orderRoute = Router();

orderRoute.post("/create-order", createOrder);
orderRoute.get("/list-orders", listOrders);
orderRoute.put("/edit-orders", editOrder);

export default orderRoute;