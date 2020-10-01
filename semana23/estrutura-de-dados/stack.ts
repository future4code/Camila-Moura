/* Tentativa */

export class Stack {
  public nodes: (number | undefined)[] = [];
  isEmpty(): boolean {
    return this.nodes.length > 0;
  }

  push(value): void {
    this.nodes.length += 1;
    this.nodes[this.nodes.length - 1] = value;
  }

  pop(): number {
    const nodeToPop = this.nodes[this.nodes.length - 1];
    this.nodes[this.nodes.length - 1] = undefined;
    this.nodes.length -= 1;
    return nodeToPop;
  }

  print(): void {
    for (let item of this.nodes) {
      console.log(item);
    }
  }
}

const stack = new Stack();
console.log(stack);
