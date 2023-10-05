import { pool } from "../database/db";

class Category {
  public static async getCategories() {
    try {
      const data = await pool.query("SELECT * FROM categories;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Category;
