import { pool } from "../database/db";

interface InsertProps {
  username: string;
  voucher_code: string;
  claimed_at: string;
  voucher_created_at: string;
  wheel_outcome: string;
}

interface UpdateProps {
  id: number;
  username: string;
  voucher_code: string;
  claimed_at: string;
  voucher_created_at: string;
  wheel_outcome: string;
}

interface DeleteProps {
  id: number | string;
}

interface DatesProps {
  start_date: string;
  end_date: string;
}

class ClaimedVoucher {
  public static async getClaimedVouchersBetweenDates({
    start_date,
    end_date,
  }: DatesProps) {
    try {
      const data = await pool.query(
        "SELECT id, username, voucher_code, claimed_at::timestamp AT TIME ZONE 'UTC' as claimed_at, voucher_created_at::timestamp AT TIME ZONE 'UTC' as voucher_created_at, wheel_outcome FROM claimed_vouchers WHERE claimed_at BETWEEN $1 AND $2;",
        [start_date, end_date]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async getClaimedVouchers() {
    try {
      const data = await pool.query(
        "SELECT id, username, voucher_code, claimed_at::timestamp AT TIME ZONE 'UTC' as claimed_at, voucher_created_at::timestamp AT TIME ZONE 'UTC' as voucher_created_at, wheel_outcome FROM claimed_vouchers ORDER BY id;"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addClaimedVoucher({
    username,
    voucher_code,
    claimed_at,
    voucher_created_at,
    wheel_outcome,
  }: InsertProps) {
    try {
      const data = await pool.query(
        "INSERT INTO claimed_vouchers (username, voucher_code, claimed_at, voucher_created_at, wheel_outcome) VALUES($1, $2, $3, $4, $5) RETURNING *;",
        [username, voucher_code, claimed_at, voucher_created_at, wheel_outcome]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateClaimedVoucher({
    username,
    voucher_code,
    claimed_at,
    voucher_created_at,
    wheel_outcome,
    id,
  }: UpdateProps) {
    try {
      const data = await pool.query(
        "UPDATE claimed_vouchers SET username = $1, voucher_code = $2, claimed_at = $3, voucher_created_at = $4, wheel_outcome = $5 WHERE id = $6 RETURNING *;",
        [
          username,
          voucher_code,
          claimed_at,
          voucher_created_at,
          wheel_outcome,
          id,
        ]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteClaimedVoucher({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM claimed_vouchers WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ClaimedVoucher;
