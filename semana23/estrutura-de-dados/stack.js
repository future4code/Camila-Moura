"use strict";
/* Tentativa */
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.nodes = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.nodes.length > 0;
    };
    Stack.prototype.push = function (value) {
        this.nodes.length += 1;
        this.nodes[this.nodes.length - 1] = value;
    };
    Stack.prototype.pop = function () {
        var nodeToPop = this.nodes[this.nodes.length - 1];
        this.nodes[this.nodes.length - 1] = undefined;
        this.nodes.length -= 1;
        return nodeToPop;
    };
    Stack.prototype.print = function () {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
stack.push(3);
console.log(stack);
