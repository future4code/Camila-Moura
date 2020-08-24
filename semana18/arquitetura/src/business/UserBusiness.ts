import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  async createUser(user: any) {
    const idGenerator = new IdGenerator();
    const hashManager = new HashManager();
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();
    try {
      if (!user.name || !user.email || !user.password || !user.role) {
        throw new Error("Please fill all the fields");
      }

      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (user.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const id = idGenerator.generate();
      const hashPassword = await hashManager.hash(user.password);
      await userDatabase.createUser(
        id,
        user.email,
        user.name,
        hashPassword,
        user.role
      );
      const token = authenticator.generateToken({ id: id, role: user.role });

      return token;
    } catch (error) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }

  async getUserByEmail(user: any) {
    const userDatabase = new UserDatabase();
    const userDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userDB.getPassword()
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id: userDB.getId() });

    if (!hashCompare) {
      throw new Error("Senha inválida!");
    }
    return accessToken;
  }

  async getAllUsers(token: any) {
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();
    authenticator.getData(token);
    return await userDatabase.getAllUsers();
  }

  async deleteUser(input: any) {
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();
    const verifiedToken = authenticator.getData(input.token);
    if (verifiedToken.role !== "ADMIN") {
      throw new Error("Apenas administradores podem deletar usuários");
    }

    return await userDatabase.deleteUser(input.id);
  }
}
