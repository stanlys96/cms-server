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

  public static async addClaimedVoucher(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ClaimedVoucher.addClaimedVoucher(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateClaimedVoucher(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ClaimedVoucher.updateClaimedVoucher(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteClaimedVoucher(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ClaimedVoucher.deleteClaimedVoucher(req.params as any);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ClaimedVoucherController;
