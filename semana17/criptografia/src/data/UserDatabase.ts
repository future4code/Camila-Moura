import knex from "knex";
import BaseDB from "./BaseDatabase";

export default class UserDatabase extends BaseDB {
  static tableName = "User";
  public async createUser(
    id: string,
    email: string,
    password: string,
    role?: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        user_id: id,
        user_email: email,
        user_password: password,
        role: role,
      })
      .into(UserDatabase.tableName);

    await this.destroyConnection();
  }

  public async getUserByEmail(email: string): Promise<any> {
    await this.getConnection()
      .select("*")
      .from(UserDatabase.tableName)
      .where({ user_email: email });

    return [0];
  }

  public async getUserById(id: string): Promise<any> {
    await this.getConnection()
      .select("*")
      .from(UserDatabase.tableName)
      .where({ user_id: id });

    return [0];
  }

  public async deleteUser(id: string): Promise<any> {
    await this.getConnection()
      .delete()
      .from(UserDatabase.tableName)
      .where({ id });
  }
}
