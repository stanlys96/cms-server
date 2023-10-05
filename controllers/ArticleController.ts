import Article from "../models/Article";
import { Request, Response, NextFunction } from "express";

class ArticleController {
  public static async getArticleById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.getArticleById(req.params as any);
      return res.json(data?.rows[0] ?? {});
    } catch (e) {
      console.log(e);
    }
  }

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

  public static async addArticle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.addArticle(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateArticle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.updateArticle(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteArticle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.deleteArticle(req.params as any);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ArticleController;
