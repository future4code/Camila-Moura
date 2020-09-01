export interface Character {
  name: String;
  lifes: Number;
  defense: Number;
  strength: Number;
}

export function validateCharacter(input: Character): boolean {
  if (
    !input.name ||
    input.lifes === undefined ||
    input.defense === undefined ||
    input.strength === undefined
  ) {
    return false;
  }

  if (
    !input.name ||
    input.lifes === null ||
    input.defense === null ||
    input.strength === null
  ) {
    return false;
  }

  if (input.lifes < 0 || input.defense < 0 || input.strength < 0) {
    return false;
  }

  return true;
}

export const performAttack = (attacker: Character, defender: Character) => {
  const validateAttacker = validateCharacter(attacker);
  const validateDefender = validateCharacter(defender);

  if (!validateAttacker || !validateDefender) {
    return "Invalid Character";
  }

  if (defender.defense < attacker.strength) {
    defender.lifes -= attacker.strength - defender.defense;
  }
};

export const performAttack2 = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    return "Invalid Character";
  }

  if (defender.defense < attacker.strength) {
    defender.lifes -= attacker.strength - defender.defense;
  }
};
