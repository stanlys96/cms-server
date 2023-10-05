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
}

export default UnclaimedVoucherController;
