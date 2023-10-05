import { pool } from "../database/db";

class WheelOutcome {
  public static async getWheelOutcomes() {
    try {
      const data = await pool.query("SELECT * FROM wheel_outcomes;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default WheelOutcome;
