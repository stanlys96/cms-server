import { pool } from "../database/db";

interface InsertProps {
  category_title: string;
  category_image_url: string;
}

interface UpdateProps {
  id: number;
  category_title: string;
  category_image_url: string;
}

interface DeleteProps {
  id: number | string;
}

class Category {
  public static async getCategories() {
    try {
      const data = await pool.query("SELECT * FROM categories ORDER BY id;");
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async getCategoriesWithArticles({ id }: DeleteProps) {
    try {
      console.log(id);
      const data = await pool.query(
        "SELECT * FROM articles WHERE category_id = $1",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async addCategory({
    category_title,
    category_image_url,
  }: InsertProps) {
    try {
      const data = await pool.query(
        "INSERT INTO categories (category_title, category_image_url) VALUES($1, $2) RETURNING *;",
        [category_title, category_image_url]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async updateCategory({
    category_title,
    category_image_url,
    id,
  }: UpdateProps) {
    try {
      const data = await pool.query(
        "UPDATE categories SET category_title = $1, category_image_url = $2 WHERE id = $3 RETURNING *;",
        [category_title, category_image_url, id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteCategory({ id }: DeleteProps) {
    try {
      const data = await pool.query(
        "DELETE FROM categories WHERE id = $1 RETURNING *;",
        [id]
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  public static async deleteMultipleCategories(theData: any) {
    try {
      const result = [];
      for (let i = 0; i < theData.length; i++) {
        result.push(`$${i + 1}`);
      }
      const data = await pool.query(
        `DELETE FROM categories WHERE id IN (${result.join(", ")});`,
        theData
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Category;
