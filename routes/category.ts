import { Router } from "express";

import CategoryController from "../controllers/CategoryController";

const router = Router();

router.get("/", CategoryController.getCategories);

export default router;
