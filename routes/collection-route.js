import { Router } from "express";
import { createCollection, findCollection, listCollections } from "../controllers/collection-controllers.js";

const collectionRoute = Router();

collectionRoute.post("/create-collection", createCollection);
collectionRoute.get("/find-collection", findCollection);
collectionRoute.get("/list-collections", listCollections);


export default collectionRoute;