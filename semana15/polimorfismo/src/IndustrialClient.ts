import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegistration: string,
    public machinesQuantity: number,
    public cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustrialRegistration(): string {
    return this.industrialRegistration;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
