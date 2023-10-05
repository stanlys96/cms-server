import { Router } from "express";

import ArticleController from "../controllers/ArticleController";

const router = Router();

router.get("/", ArticleController.getArticles);
router.post("/addArticle", ArticleController.addArticle);
router.put("/updateArticle/:id", ArticleController.updateArticle);
router.delete("/deleteArticle/:id", ArticleController.deleteArticle);

export default router;
