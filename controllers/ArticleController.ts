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

  public static async getArticlesPaginate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.getArticles();
      const articles = data?.rows ?? [];
      const pageCount = Math.ceil(articles.length / 6);
      let page: any = parseInt(req.query.page as any);
      if (!page) {
        page = 1;
      }
      if (page > pageCount) {
        page = pageCount;
      }
      return res.json({
        page: page,
        pageCount: pageCount,
        data: articles.slice(page * 6 - 6, page * 6),
      });
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

  public static async deleteMultipleArticles(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Article.deleteMultipleArticles(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ArticleController;
