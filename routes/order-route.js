import { Router } from "express";
import { createOrder, findOrder, listOrders, editOrder, deleteOrder } from "../controllers/order-controllers.js";

const orderRoute = Router();

orderRoute.post("/create-order", createOrder);
orderRoute.get("/list-orders", listOrders);
orderRoute.get("/find-order", findOrder);
orderRoute.put("/edit-orders", editOrder);
orderRoute.delete("/delete-order", deleteOrder);

export default orderRoute;