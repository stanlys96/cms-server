import { pool } from "../database/db";

interface DeleteProps {
  id: number | string;
}

interface UpdateProps {
  id: number;
  article_title: string;
  article_image_url: string;
  article_date: string;
  author: string;
  category_id: number;
  description: string;
  author_image_url: string;
  main: boolean;
}

interface InsertProps {
  article_title: string;
  article_image_url: string;
  article_date: string;
  author: string;
  category_id: number;
  description: string;
  author_image_url: string;
  main: boolean;
}

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

  public static async getArticleById({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "SELECT a.id, a.article_title, a.article_image_url, a.article_date, a.author, a.category_id, a.description, a.author_image_url, a.main, c.category_title, c.category_image_url FROM articles a JOIN categories c ON a.category_id = c.id WHERE a.id = $1 ORDER BY a.id;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addArticle({
    article_title,
    article_image_url,
    article_date,
    author,
    category_id,
    description,
    author_image_url,
    main,
  }: InsertProps) {
    try {
      const data = await pool.query(
        "INSERT INTO articles (article_title, article_image_url, article_date, author, category_id, description, author_image_url, main) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
        [
          article_title,
          article_image_url,
          article_date,
          author,
          category_id,
          description,
          author_image_url,
          main,
        ]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateArticle({
    article_title,
    article_image_url,
    article_date,
    author,
    category_id,
    description,
    author_image_url,
    main,
    id,
  }: UpdateProps) {
    try {
      const data = await pool.query(
        "UPDATE articles SET article_title = $1, article_image_url = $2, article_date = $3, author = $4, category_id = $5, description = $6, author_image_url = $7, main = $8 WHERE id = $9 RETURNING *;",
        [
          article_title,
          article_image_url,
          article_date,
          author,
          category_id,
          description,
          author_image_url,
          main,
          id,
        ]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteArticle({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM articles WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteMultipleArticles(theData: any) {
    try {
      const result = [];
      for (let i = 0; i < theData.length; i++) {
        result.push(`$${i + 1}`);
      }
      const data = await pool.query(
        `DELETE FROM articles WHERE id IN (${result.join(", ")});`,
        theData
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Article;
