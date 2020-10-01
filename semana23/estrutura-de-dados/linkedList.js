"use strict";
/* Faça a implementação de uma Lista Ligada em *Typescript*.
Implemente o método que adiciona um elemento ao final da lista e
um método que imprima todos elementos presentes nela. */
exports.__esModule = true;
exports.LinkedListNode = exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.start = null;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new LinkedListNode();
        newNode.value = value;
        if (this.start === null) {
            this.start = newNode;
            return;
        }
        var node = this.start;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = newNode;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode() {
        this.next = null;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var list = new LinkedList();
list.add(10);
console.log(list);
