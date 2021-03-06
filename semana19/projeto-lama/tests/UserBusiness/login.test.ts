import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, LoginInputDTO } from "../../src/model/User";

describe("Testando o login na camada de Business", () => {
  let userDatabase = {};
  let hashManager = {};
  let idGenerator = {};

  let authenticator = {
    generateToken: jest.fn(() => "token"),
  };

  test("Deve retornar erro quando o e-mail está vazio", async () => {
    expect.assertions(2);

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashManager as any,
        authenticator as any
      );

      const userInput: LoginInputDTO = {
        email: "",
        password: "bananinha",
      };

      await userBusiness.login(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Missing input");
    }
  });

  test("Deve retornar erro quando a senha está vazia", async () => {
    expect.assertions(2);

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashManager as any,
        authenticator as any
      );

      const userInput: LoginInputDTO = {
        email: "astrodev@labenu.com.br",
        password: "",
      };

      await userBusiness.login(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Missing input");
    }
  });

  test("Deve retornar erro quando o usuário não é encontrado", async () => {
    expect.assertions(3);
    let getUserByEmail = jest.fn((email: string) => {
      return undefined;
    });
    try {
      userDatabase = { getUserByEmail };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashManager as any,
        authenticator as any
      );

      const userInput: LoginInputDTO = {
        email: "notFound@gmail.com",
        password: "teste",
      };

      await userBusiness.login(userInput);
    } catch (error) {
      expect(error.code).toBe(404);
      expect(error.message).toEqual("User not found");
      expect(getUserByEmail).toHaveBeenCalledWith("notFound@gmail.com");
    }
  });

  test("Deve retornar erro quando o usuário passou a senha incorreta", async () => {
    expect.assertions(4);
    let getUserByEmail = jest.fn((email: string) => {
      return new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "bananinha",
        UserRole.ADMIN
      );
    });

    let compareHash = jest.fn(
      (password: string, userPassword: string) => false
    );

    try {
      userDatabase = { getUserByEmail };
      hashManager = { compareHash };
      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashManager as any,
        authenticator as any
      );

      const userInput: LoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "maxixezinho",
      };

      await userBusiness.login(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Invalid password");
      expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
      expect(compareHash).toHaveBeenCalledWith("maxixezinho", "bananinha");
    }
  });

  test("Deve retornar token quando todos os dados estiverem corretos", async () => {
    expect.assertions(3);
    let getUserByEmail = jest.fn((email: string) => {
      return new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "bananinha",
        UserRole.ADMIN
      );
    });

    let compare = jest.fn((password: string, userPassword: string) => true);

    try {
      userDatabase = { getUserByEmail };
      hashManager = { compare };
      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashManager as any,
        authenticator as any
      );

      const userInput: LoginInputDTO = {
        email: "astrodev@gmail.com",
        password: "bananinha",
      };

      await userBusiness.login(userInput);

      expect(getUserByEmail).toHaveBeenCalledWith("astrodev@gmail.com");
      expect(compare).toHaveBeenCalledWith("maxixezinho", "bananinha");
      expect(authenticator.generateToken).toHaveReturnedWith("token");
    } catch (error) {}
  });
});
