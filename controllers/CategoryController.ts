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
}

export default CategoryController;
