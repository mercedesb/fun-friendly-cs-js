import LinkedList from "../linked-list/LinkedList.js";
import LinkedListNode from "../linked-list/LinkedListNode.js";

let head = Symbol();

export default class Stack extends LinkedList {
  constructor() {
    super();
  }

  push(data) {
    const newNode = new LinkedListNode(data);
    if (this._head) {
      newNode.next = this._head;
    }
    this._head = newNode;
    return newNode;
  }

  pop() {
    const popped = this._head;
    this._head = this._head.next;
    return popped;
  }

  // override default add behavior
  add(data) {
    this.push(data);
  }

  insert(data, index) {
    if (index > 0) throw new Error("Can't insert into the middle of a stack");
    return super.insert(data, index);
  }

  // override default remove behavior
  remove(index) {
    if (index > 0) throw new Error("Can't remove from the middle of a stack");
    return super.remove(index);
  }
}
