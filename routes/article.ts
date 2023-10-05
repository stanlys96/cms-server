import { Router } from "express";
import { auth } from "express-oauth2-jwt-bearer";

import ArticleController from "../controllers/ArticleController";

const router = Router();

router.get("/", ArticleController.getArticles);
router.get("/:id", ArticleController.getArticleById);
router.post("/addArticle", ArticleController.addArticle);
router.put("/updateArticle/:id", ArticleController.updateArticle);
router.delete("/deleteArticle/:id", ArticleController.deleteArticle);

export default router;
