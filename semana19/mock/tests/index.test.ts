import { validateCharacter, performAttack2 } from "../src/index";

describe("Should return false for incorrect inputs", () => {
  test("Should return false for character name empty", () => {
    const character = {
      name: "",
      lifes: 7,
      defense: 7,
      strength: 8,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for character life empty", () => {
    const character = {
      name: "Astrodev",
      lifes: null,
      defense: 7,
      strength: 8,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for character strength empty", () => {
    const character = {
      name: "Astrodev",
      lifes: 8,
      defense: 7,
      strength: undefined,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for character defense empty", () => {
    const character = {
      name: "Astrodev",
      lifes: 8,
      defense: undefined,
      strength: 8,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  test("Should return false for negative numbers for lifes, defense or strength", () => {
    const character = {
      name: "Astrodev",
      lifes: -2,
      defense: 7,
      strength: 8,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });
});

describe("Should return true for correct inputs", () => {
  test("Should return true for 0 number for lifes, defense or strength", () => {
    const character = {
      name: "Astrodev",
      lifes: 0,
      defense: 7,
      strength: 8,
    };

    const result = validateCharacter(character);
    expect(result).toBe(true);
  });

  test("Should return true for correct inputs", () => {
    const character = {
      name: "Astrodev",
      lifes: 10,
      defense: 7,
      strength: 8,
    };

    const result = validateCharacter(character);
    expect(result).toBe(true);
  });
});

describe("Testing jest.fn", () => {
  test("Should return true", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    expect(validatorMock).toBe(true);
  });

  test("Should return false", () => {
    const validatorMock = jest.fn(() => {
      return false;
    });

    expect(validatorMock).toBe(false);
  });
});

describe("Should return performAttack", () => {
  test("Should return attack and call mock function", () => {
    const attacker = {
      name: "Astrodev",
      lifes: 500,
      defense: 500,
      strength: 500,
    };

    const defender = {
      name: "Wall-E",
      lifes: 500,
      defense: 500,
      strength: 700,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    expect(validatorMock).toBe(true);

    performAttack2(attacker, defender, validatorMock as any);

    expect(defender.lifes).toEqual(500);
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should not return attack, call mock function and return error", () => {
    expect.assertions(4);

    const attacker = {
      name: "Astrodev",
      lifes: undefined,
      defense: 500,
      strength: 500,
    };

    const defender = {
      name: "Wall-E",
      lifes: undefined,
      defense: 500,
      strength: 700,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    try {
      performAttack2(attacker, defender, validatorMock as any);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });

  test("Should not return attack", () => {
    expect.assertions(4);

    const attacker = {
      name: "Astrodev",
      lifes: undefined,
      defense: 500,
      strength: 0,
    };

    const defender = {
      name: "Wall-E",
      lifes: undefined,
      defense: 500,
      strength: 700,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    performAttack2(attacker, defender, validatorMock as any);
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  });

  test("Should not return attack ", () => {
    expect.assertions(4);

    const attacker = {
      name: "Astrodev",
      lifes: undefined,
      defense: 500,
      strength: 0,
    };

    const defender = {
      name: "Wall-E",
      lifes: undefined,
      defense: 500,
      strength: 700,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    performAttack2(attacker, defender, validatorMock as any);
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  });
});
