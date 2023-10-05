import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};

export const pool = new Pool(proConfig);
