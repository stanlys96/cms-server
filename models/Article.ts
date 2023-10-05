import { pool } from "../database/db";

class Article {
  public static async getArticles() {
    try {
      const data = await pool.query(
        "SELECT * FROM articles a JOIN categories c ON a.category_id = c.id;"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Article;
