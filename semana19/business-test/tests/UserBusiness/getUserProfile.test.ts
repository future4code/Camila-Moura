import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing getUserProfile", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let idGenerator = {};
  let tokenGenerator = {};

  test("Should return User not found", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn(() => {
        return undefined;
      });

      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashGenerator as any,
        tokenGenerator as any
      );

      await userBusiness.getUserProfile("");
    } catch (error) {
      expect(error.errorCode).toBe(404);
      expect(error.message).toEqual("User not found");
    }
  });

  test("Should return user information", async () => {
    const getUserById = jest.fn(
      () =>
        new User(
          "id",
          "WALL-E",
          "wall@pixar.com",
          "hash",
          stringToUserRole("NORMAL")
        )
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashGenerator as any,
      tokenGenerator as any
    );

    const user = await userBusiness.getUserProfile("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "WALL-E",
      email: "wall@pixar.com",
      role: UserRole.NORMAL,
    });
  });
});
