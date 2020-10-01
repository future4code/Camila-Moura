/* Tentativa */
export class LinkedList {
  public start: LinkedListNode | null = null;

  public add(value: any) {
    const newNode = new LinkedListNode();
    newNode.value = value;

    if (this.start === null) {
      this.start = newNode;
      return;
    }

    let node = this.start;
    while (node.next !== null) {
      node = node.next;
    }

    node.next = newNode;
  }
}

export class LinkedListNode {
  public value: any;
  public next: LinkedListNode | null = null;
}

const list = new LinkedList();
list.add(10);

console.log(list);
