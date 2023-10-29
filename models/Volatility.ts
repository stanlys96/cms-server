import { pool } from "../database/db";

interface InsertProps {
  username: string;
}

interface UpdateProps {
  id: number;
  username: string;
}

interface DeleteProps {
  id: number | string;
}

class Volatility {
  public static async getVolatility() {
    try {
      const data = await pool.query("SELECT * FROM volatility ORDER BY id;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addVolatility({ username }: InsertProps) {
    try {
      const dataExist = await pool.query(
        "SELECT * FROM volatility WHERE username = $1",
        [username]
      );
      if (dataExist.rowCount > 0) {
        return {
          rows: "Data already exist!",
        };
      } else {
        const data = await pool.query(
          "INSERT INTO volatility (username) VALUES($1) RETURNING *;",
          [username]
        );
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateVolatility({ username, id }: UpdateProps) {
    try {
      const dataExist = await pool.query(
        "SELECT * FROM volatility WHERE username = $1",
        [username]
      );
      if (dataExist.rowCount > 0) {
        return {
          rows: "Data already exist!",
        };
      } else {
        const data = await pool.query(
          "UPDATE volatility SET username = $1 WHERE id = $2 RETURNING *;",
          [username, id]
        );
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteVolatility({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM volatility WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteMultipleVolatility(theData: any) {
    try {
      const result = [];
      for (let i = 0; i < theData.length; i++) {
        result.push(`$${i + 1}`);
      }
      const data = await pool.query(
        `DELETE FROM volatility WHERE id IN (${result.join(", ")});`,
        theData
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Volatility;
