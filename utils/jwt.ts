import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//For env File
dotenv.config();

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

export function generateToken(payload: any) {
  return jwt.sign(payload, process.env.SECRET as string);
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.SECRET as string);
}
