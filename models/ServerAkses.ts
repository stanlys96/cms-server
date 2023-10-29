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

class ServerAkses {
  public static async getServerAkses() {
    try {
      const data = await pool.query("SELECT * FROM server_akses ORDER BY id;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addServerAkses({ username }: InsertProps) {
    try {
      const dataExist = await pool.query(
        "SELECT * FROM server_akses WHERE username = $1",
        [username]
      );
      if (dataExist.rowCount > 0) {
        return {
          rows: "Data already exist!",
        };
      } else {
        const data = await pool.query(
          "INSERT INTO server_akses (username) VALUES($1) RETURNING *;",
          [username]
        );
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateServerAkses({ username, id }: UpdateProps) {
    try {
      const dataExist = await pool.query(
        "SELECT * FROM server_akses WHERE username = $1",
        [username]
      );
      if (dataExist.rowCount > 0) {
        return {
          rows: "Data already exist!",
        };
      } else {
        const data = await pool.query(
          "UPDATE server_akses SET username = $1 WHERE id = $2 RETURNING *;",
          [username, id]
        );
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteServerAkses({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM server_akses WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteMultipleServerAkses(theData: any) {
    try {
      const result = [];
      for (let i = 0; i < theData.length; i++) {
        result.push(`$${i + 1}`);
      }
      const data = await pool.query(
        `DELETE FROM server_akses WHERE id IN (${result.join(", ")});`,
        theData
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServerAkses;
