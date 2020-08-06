import { Employee } from "./Employee";

export class Seller extends Employee {
  static SELLING_COMISSION: number = 5;

  private salesQuantity: number = 0;

  public setSalesQuantity(newQuantity: number): number {
    return (this.salesQuantity = newQuantity);
  }

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + 400 + this.salesQuantity * Seller.BENEFITS_VALUE;
  }
}
