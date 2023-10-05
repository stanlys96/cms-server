import User from "../models/User";
import { Request, Response, NextFunction } from "express";
import { comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

class UserController {
  // public static async register(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     const newUser = await User.register(req.body);
  //     if (newUser === "email_exist") {
  //       res.status(404).json({ message: "Email already registered!" });
  //     } else {
  //       if (newUser) {
  //         res.status(200).json({ ...newUser.rows[0], message: "Success" });
  //       } else {
  //         res.status(500).json({ message: "Internal server error" });
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await User.login(email);
      if (user && user.rowCount > 0) {
        const loggedInUser = user.rows[0];
        const comparedPassword = comparePassword(
          password,
          loggedInUser.password
        );
        if (comparedPassword) {
          const token = generateToken({
            email: loggedInUser.email,
          });
          res.status(200).json({
            email: loggedInUser.email,
            token,
            message: "Success",
          });
        } else {
          res.status(404).json({ message: "Email or password is incorrect!" });
        }
      } else {
        res.status(404).json({ message: "Email or password is incorrect!" });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default UserController;
