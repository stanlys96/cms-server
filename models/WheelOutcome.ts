import { pool } from "../database/db";

interface InsertProps {
  name: string;
  order: number;
}

interface UpdateProps {
  id: number;
  name: string;
  order: number;
}

interface DeleteProps {
  id: number | string;
}

class WheelOutcome {
  public static async getWheelOutcomes() {
    try {
      const data = await pool.query("SELECT * FROM wheel_outcomes;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addWheelOutcome({ name, order }: InsertProps) {
    try {
      const data = await pool.query(
        `INSERT INTO wheel_outcomes (name, "order") VALUES($1, $2) RETURNING *;`,
        [name, order]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateWheelOutcome({ name, order, id }: UpdateProps) {
    try {
      const data = await pool.query(
        `UPDATE wheel_outcomes SET name = $1, "order" = $2 WHERE id = $3 RETURNING *;`,
        [name, order, id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteWheelOutcome({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM wheel_outcomes WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default WheelOutcome;
