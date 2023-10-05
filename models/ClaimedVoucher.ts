import { pool } from "../database/db";

class ClaimedVoucher {
  public static async getClaimedVouchers() {
    try {
      const data = await pool.query("SELECT * FROM claimed_vouchers;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ClaimedVoucher;
