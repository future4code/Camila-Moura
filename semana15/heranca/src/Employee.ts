import { User } from "./User";

export class Employee extends User {
  static BENEFITS_VALUE: number = 400;

  protected admissionDate: string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
    console.log("Chamando o construtor da classe Employee");
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + Employee.BENEFITS_VALUE;
  }
}
