import { pool } from "../database/db";

class UnclaimedVoucher {
  public static async getUnclaimedVouchers() {
    try {
      const data = await pool.query("SELECT * FROM unclaimed_vouchers;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default UnclaimedVoucher;
