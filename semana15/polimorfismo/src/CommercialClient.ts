import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClients extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    public cnpj: string,
    public floorsQuantity: number,
    public cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public getCnpj(): string {
    return this.cnpj;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
