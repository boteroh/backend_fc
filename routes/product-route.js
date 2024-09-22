import { Router } from "express";
import { createReference, viewReference, listReferences, updateReference, deleteReference } from "../controllers/product-controller.js";

const referenceRoute = Router();

referenceRoute.post("/create-reference", createReference);
referenceRoute.get("/view-reference", viewReference);
referenceRoute.get("/list-references", listReferences);
referenceRoute.delete("/delete-reference", deleteReference);

export default referenceRoute;
