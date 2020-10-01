import { LinkedList } from "./linkedList";

export class Queue {
  public nodes: LinkedList = new LinkedList();

  isEmpty(): boolean {
    return this.nodes.start === undefined;
  }

  enqueue(value: number): void {
    this.nodes.add(value);
  }
}
