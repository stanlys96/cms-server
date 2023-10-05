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
}

export default ServerAksesController;
