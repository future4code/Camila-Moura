import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ email: email });

      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getAllUsers(): Promise<any[]> {
    try {
      const categories: any = [];
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME);
      categories.push(result[0]);
      return categories;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deleteUser(id: string): Promise<any> {
    try {
      await this.getConnection()
        .delete("*")
        .from(UserDatabase.TABLE_NAME)
        .where({ id: id });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
