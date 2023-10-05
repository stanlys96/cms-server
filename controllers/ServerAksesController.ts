import ServerAkses from "../models/ServerAkses";
import { Request, Response, NextFunction } from "express";

class ServerAksesController {
  public static async getServerAkses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ServerAkses.getServerAkses();
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async addServerAkses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ServerAkses.addServerAkses(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateServerAkses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ServerAkses.updateServerAkses(req.body);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteServerAkses(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await ServerAkses.deleteServerAkses(req.params as any);
      return res.json(data?.rows ?? []);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServerAksesController;
