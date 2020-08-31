import knex from "knex";

export default class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        user_id: id,
        user_email: email,
        user_password: password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ user_email: email });

    return [0];
  }

  public async getUserById(id: string): Promise<any> {
    await this.connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ user_id: id });

    return [0];
  }
}
