export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  // private transactions: Transaction[];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getAge(): number {
    return this.age;
  }

  public getBalance(): number {
    return this.balance;
  }

  public addBalance(value: number): void {
    this.balance + value;
    console.log("Saldo atualizado com sucesso");
  }
}
