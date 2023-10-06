import { Router } from "express";

import CategoryController from "../controllers/CategoryController";

const router = Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategoriesWithArticles);
router.post("/addCategory", CategoryController.addCategory);
router.put("/updateCategory/:id", CategoryController.updateCategory);
router.delete("/deleteCategory/:id", CategoryController.deleteCategory);
router.delete("/deleteMultiple", CategoryController.deleteMultipleCategories);

export default router;
