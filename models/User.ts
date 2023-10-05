import { pool } from "../database/db";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

interface RegisterProps {
  username: string;
  email: string;
  password: string;
}

class User {
  public static async login(email: string) {
    try {
      const findUser = await pool.query(
        "SELECT * FROM users WHERE email = $1;",
        [email]
      );
      return findUser;
    } catch (e) {
      console.log(e);
    }
  }

  // public static async register({ username, email, password }: RegisterProps) {
  //   try {
  //     const findUser = await pool.query(
  //       "SELECT * FROM users WHERE email = $1",
  //       [email]
  //     );
  //     if (findUser.rowCount > 0) {
  //       return "email_exist";
  //     } else {
  //       const hashedPassword = hashPassword(password);
  //       const newUser = await pool.query(
  //         "INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *;",
  //         [username, email, hashedPassword]
  //       );
  //       return newUser;
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}

export default User;
