import ClaimedVoucher from "../models/ClaimedVoucher";
import { Request, Response, NextFunction } from "express";

class ClaimedVoucherController {
  public static async getClaimedVouchers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ClaimedVoucher.getClaimedVouchers();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ClaimedVoucherController;
