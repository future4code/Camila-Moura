import { UserBusiness } from "../../src/business/UserBusiness";
import { IdGenerator } from "../../src/services/IdGenerator";
import { User, stringToUserRole, UserInputDTO } from "../../src/model/User";

describe("Testando o signup na camada UserBusiness", () => {
  let userDatabase = {
    createUser: jest.fn((user: User) => {}),
  };
  let hashManager = {
    hash: jest.fn(() => "hash"),
  };
  let idGenerator = {
    generate: jest.fn(() => "id"),
  };

  let authenticator = {
    generateToken: jest.fn(() => "token"),
  };

  test("Deve retornar erro ao receber um nome vazio", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "astrodev@labenu.com.br",
        password: "bananinha",
        name: "",
        role: "ADMIN",
      };

      await userBusiness.signup(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Missing input");
    }
  });

  test("Deve retornar erro ao receber um email vazio", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "",
        password: "bananinha",
        name: "Astrodev",
        role: "ADMIN",
      };

      await userBusiness.signup(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Missing input");
    }
  });

  test("Deve retornar erro ao receber uma senha vazia", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "astro@dev.com.br",
        password: "",
        name: "Astrodev",
        role: "ADMIN",
      };

      await userBusiness.signup(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Missing input");
    }
  });

  test("Deve retornar erro ao receber um role vazio", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "astro@dev.com.br",
        password: "bananinha",
        name: "Astrodev",
        role: "",
      };

      await userBusiness.signup(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Missing input");
    }
  });

  test("Deve retornar erro 'Invalid email' para um email sem @", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "astrodev.com.br",
        password: "bananinha",
        name: "Astrodev",
        role: "ADMIN",
      };
      await userBusiness.signup(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Invalid email");
    }
  });

  test("Deve retornar erro 'Invalid password' para uma senha com menos de 6 caracteres", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "astro@dev.com.br",
        password: "pera",
        name: "Astrodev",
        role: "ADMIN",
      };

      await userBusiness.signup(userInput);
    } catch (error) {
      expect(error.code).toBe(422);
      expect(error.message).toEqual("Invalid password");
    }
  });

  test("Deve retornar 'Invalid user role em caso de role que não seja NORMAL ou ADMIN'", async () => {
    expect.assertions(2);

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );
    try {
      const userInput: UserInputDTO = {
        email: "astro@dev.com.br",
        password: "bananinha",
        name: "Astrodev",
        role: "OUTRO",
      };

      await userBusiness.signup(userInput);
    } catch (err) {
      expect(err.code).toBe(422);
      expect(err.message).toBe("Invalid user role");
    }
  });

  test("Deve retornar token de acesso após criação de usuário", async () => {
    expect.assertions(3);
    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashManager as any,
      authenticator as any
    );

    try {
      const userInput: UserInputDTO = {
        email: "astro@dev.com.br",
        password: "bananinha",
        name: "Astrodev",
        role: "ADMIN",
      };

      await userBusiness.signup(userInput);

      expect(hashManager.hash).toBeCalled();
      expect(userDatabase.createUser).toBeCalledWith(
        new User(
          "id",
          "Astrodev",
          "astro@dev.com.br",
          "hash",
          stringToUserRole("ADMIN")
        )
      );
      expect(authenticator.generateToken).toHaveReturnedWith("token");
    } catch (err) {}
  });
});
