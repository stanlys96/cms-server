import Volatility from "../models/Volatility";
import { Request, Response, NextFunction } from "express";

class ServerAksesController {
  public static async getVolatility(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Volatility.getVolatility();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async addVolatility(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Volatility.addVolatility(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateVolatility(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Volatility.updateVolatility(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteVolatility(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Volatility.deleteVolatility(req.params as any);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteMultipleVolatility(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Volatility.deleteMultipleVolatility(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServerAksesController;
