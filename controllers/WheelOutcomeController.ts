import WheelOutcome from "../models/WheelOutcome";
import { Request, Response, NextFunction } from "express";

class WheelOutcomeController {
  public static async getWheelOutcomes(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await WheelOutcome.getWheelOutcomes();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async addWheelOutcome(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await WheelOutcome.addWheelOutcome(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateWheelOutcome(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await WheelOutcome.updateWheelOutcome(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteWheelOutcome(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await WheelOutcome.deleteWheelOutcome(req.params as any);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default WheelOutcomeController;
