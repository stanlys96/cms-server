import Article from "../models/Article";
import { Request, Response, NextFunction } from "express";

class ArticleController {
  public static async getArticles(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.getArticles();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ArticleController;
