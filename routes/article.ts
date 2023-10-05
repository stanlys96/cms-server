import { Router } from "express";

import ArticleController from "../controllers/ArticleController";

const router = Router();

router.get("/", ArticleController.getArticles);

export default router;
