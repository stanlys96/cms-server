import Category from "../models/Category";
import { Request, Response, NextFunction } from "express";

class CategoryController {
  public static async getCategories(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Category.getCategories();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async getCategoriesWithArticles(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Category.getCategoriesWithArticles(req.params as any);
      const categories = data?.rows ?? [];
      const pageCount = Math.ceil(categories.length / 6);
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
        data: categories.slice(page * 6 - 6, page * 6),
      });
    } catch (e) {
      console.log(e);
    }
  }

  public static async addCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Category.addCategory(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Category.updateCategory(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Category.deleteCategory(req.params as any);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteMultipleCategories(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Category.deleteMultipleCategories(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default CategoryController;
