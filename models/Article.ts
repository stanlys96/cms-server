import { pool } from "../database/db";

class Article {
  public static async getArticles() {
    try {
      const data = await pool.query(
        "SELECT a.id, a.article_title, a.article_image_url, a.article_date, a.author, a.category_id, a.description, a.author_image_url, a.main, c.category_title, c.category_image_url FROM articles a JOIN categories c ON a.category_id = c.id ORDER BY a.id;"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Article;
