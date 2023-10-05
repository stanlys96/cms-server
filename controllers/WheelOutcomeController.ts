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
}

export default WheelOutcomeController;
