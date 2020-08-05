import { Client } from "./Client";

export class ClientManager {
  private clients: Client[] = [];

  constructor(public registrationNumber: number) {}

  public getClientsQuantity(): number {
    return this.clients.length;
  }

  public calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find((client) => {
      return client.registrationNumber === registrationNumber;
    });

    if (foundClient) {
      return foundClient.calculateBill();
    }
    return 0;
  }

  public calculateTotalIncome(): number {
    let totalIncome: number = 0;
    this.clients.forEach((client) => {
      totalIncome += client.calculateBill();
    });
    return totalIncome;
  }

  public deleteUser(registrationNumber: number): void {
    let registration = undefined;

    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[1].registrationNumber === registrationNumber) {
        registration = i;
      }
    }

    if (registration !== undefined) {
      this.clients.splice(registration, 1);
    }
  }
}
