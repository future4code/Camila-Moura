import { v4 } from "uuid";

export class IdGenerator {
  public execute(): string {
    return v4();
  }
}
