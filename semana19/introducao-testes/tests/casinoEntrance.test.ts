import {
  LOCATION,
  NACIONALITY,
  User,
  Casino,
  verifyAge,
} from "../src/casinoEntrance";

/* 4. */

describe("Checking allowance of user entrance in Brazil and the USA", () => {
  test("1 brazilian allowed in Brazil", () => {
    const brazilian: User = {
      name: "Bianca",
      age: 27,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Altira",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(["Bianca"]);
  });

  test("1 american allowed in Brazil", () => {
    const american: User = {
      name: "Tom",
      age: 20,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Altira",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.allowed).toEqual(["Tom"]);
  });

  test("2 americans and 2 brazilians unallowed in USA", () => {
    const firstAmerican: User = {
      name: "Tom",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "John",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: "Gabriel",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Felipe",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: "Gala",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.unallowed).toEqual(["Tom", "John"]);
    expect(result.brazilians.unallowed).toEqual(["Gabriel", "Felipe"]);
  });

  test("2 americans allowed 2 brazilians unallowed in USA", () => {
    const firstAmerican: User = {
      name: "Tom",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "John",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: "Gabriel",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Felipe",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: "Gala",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.allowed).toEqual(["Tom", "John"]);
    expect(result.brazilians.unallowed).toEqual(["Gabriel", "Felipe"]);
  });
});

/* 5. */

describe("Checking array length of the results", () => {
  test("1 brazilian allowed in Brazil", () => {
    const brazilian: User = {
      name: "Bianca",
      age: 27,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Altira",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThanOrEqual(0);
    expect(result.brazilians.allowed.length).toBeLessThanOrEqual(2);
  });

  test("1 american allowed in Brazil", () => {
    const american: User = {
      name: "Tom",
      age: 20,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Altira",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.unallowed.length).toBe(0);
  });

  test("2 americans and 2 brazilians unallowed in USA", () => {
    const firstAmerican: User = {
      name: "Tom",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "John",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: "Gabriel",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Felipe",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: "Gala",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.unallowed).toContain("Tom");
    expect(result.brazilians.unallowed).toContain("Felipe");
  });

  test("2 americans allowed 2 brazilians unallowed in USA", () => {
    const firstAmerican: User = {
      name: "Tom",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: "John",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: "Gabriel",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: "Felipe",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: "Gala",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  });
});
