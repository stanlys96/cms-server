import { pool } from "../database/db";

class ServerAkses {
  public static async getServerAkses() {
    try {
      const data = await pool.query("SELECT * FROM server_akses;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServerAkses;
