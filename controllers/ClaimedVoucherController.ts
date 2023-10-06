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

  public static async getClaimedVouchersBetweenDates(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ClaimedVoucher.getClaimedVouchersBetweenDates(
        req.body
      );
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
      let theParsed;
      for (let key in req.body) {
        theParsed = JSON.parse(key);
      }
      const data = await ClaimedVoucher.addClaimedVoucher(theParsed);
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

  public static async deleteMultipleClaimedVouchers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ClaimedVoucher.deleteMultipleClaimedVouchers(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ClaimedVoucherController;
