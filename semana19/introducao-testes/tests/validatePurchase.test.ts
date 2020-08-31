import { User, purchase } from "../src/validatePurchase";

/* 2. */

describe("Testing balance", () => {
  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Camila",
      balance: 1000,
    };

    const result = purchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 950,
    });
  });

  test("Testing balance equal value", () => {
    const user: User = {
      name: "Lucia",
      balance: 500,
    };

    const result = purchase(user, 500);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Test balance smaller than value", () => {
    const user: User = {
      name: "Joaquim",
      balance: 5000,
    };

    const result = purchase(user, 6000);

    expect(result).toEqual(undefined);
  });
});
