import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing getAllUsers", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let idGenerator = {};
  let tokenGenerator = {};

  test("Should return Unathourized", async () => {
    expect.assertions(2);

    try {
      const getAllUsers = jest.fn();
      userDatabase = { getAllUsers };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        idGenerator as any,
        hashGenerator as any,
        tokenGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (error) {
      expect(error.errorCode).toBe(401);
      expect(error.message).toEqual("Only admin can access");
    }
  });

  test("Should return all users information", async () => {
    const getAllUsers = jest.fn(async () => [
      new User(
        "id",
        "WALL-E",
        "wall@pixar.com",
        "hash",
        stringToUserRole("ADMIN")
      ),
    ]);

    userDatabase = { getAllUsers };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      idGenerator as any,
      hashGenerator as any,
      tokenGenerator as any
    );

    const user = await userBusiness.getAllUsers(UserRole.ADMIN);
    expect(getAllUsers).toHaveBeenCalledTimes(1);

    expect(user).toContainEqual({
      id: "id",
      name: "WALL-E",
      email: "wall@pixar.com",
      role: UserRole.ADMIN,
    });
  });
});
