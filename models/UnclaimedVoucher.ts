import { pool } from "../database/db";

interface InsertProps {
  username: string;
  voucher_code: string;
  wheel_outcome_id: number;
}

interface UpdateProps {
  id: number;
  username: string;
  voucher_code: string;
  wheel_outcome_id: number;
}

interface DeleteProps {
  id: number | string;
}

class UnclaimedVoucher {
  public static async getUnclaimedVouchers() {
    try {
      const data = await pool.query("SELECT * FROM unclaimed_vouchers;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addUnclaimedVoucher({
    username,
    voucher_code,
    wheel_outcome_id,
  }: InsertProps) {
    try {
      const data = await pool.query(
        "INSERT INTO unclaimed_vouchers (username, voucher_code, wheel_outcome_id) VALUES($1, $2, $3) RETURNING *;",
        [username, voucher_code, wheel_outcome_id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateUnclaimedVoucher({
    username,
    voucher_code,
    wheel_outcome_id,
    id,
  }: UpdateProps) {
    try {
      const data = await pool.query(
        "UPDATE unclaimed_vouchers SET username = $1, voucher_code = $2, wheel_outcome_id = $3 WHERE id = $4 RETURNING *;",
        [username, voucher_code, wheel_outcome_id, id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteUnclaimedVoucher({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM unclaimed_vouchers WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default UnclaimedVoucher;
