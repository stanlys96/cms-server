import { Router } from "express";

import CategoryController from "../controllers/CategoryController";

const router = Router();

router.get("/", CategoryController.getCategories);
router.post("/addCategory", CategoryController.addCategory);
router.put("/updateCategory/:id", CategoryController.updateCategory);
router.delete("/deleteCategory/:id", CategoryController.deleteCategory);

export default router;
