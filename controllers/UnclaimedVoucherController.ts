import UnclaimedVoucher from "../models/UnclaimedVoucher";
import { Request, Response, NextFunction } from "express";

class UnclaimedVoucherController {
  public static async getUnclaimedVouchers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await UnclaimedVoucher.getUnclaimedVouchers();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async addUnclaimedVoucher(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await UnclaimedVoucher.addUnclaimedVoucher(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateUnclaimedVoucher(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await UnclaimedVoucher.updateUnclaimedVoucher(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteUnclaimedVoucher(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await UnclaimedVoucher.deleteUnclaimedVoucher(
        req.params as any
      );
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default UnclaimedVoucherController;
