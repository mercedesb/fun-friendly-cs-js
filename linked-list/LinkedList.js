import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  get head() {
    return this._head;
  }

  set head(_data) {
    throw new Error("head is protected; you can not mutate it directly");
  }

  get tail() {
    return this._tail;
  }

  set tail(_data) {
    throw new Error("tail is protected; you can not mutate it directly");
  }

  add(data) {
    const newNode = new LinkedListNode(data);

    if (this._head === null) {
      this._head = newNode;
    } else {
      this._tail.next = newNode;
    }
    this._tail = newNode;
    return newNode;
  }

  remove() {
    this.removeHead();
  }

  removeHead() {
    if (this._head === null) return undefined;

    let removed = this._head;
    this._head = this._head.next;
    return removed;
  }

  removeTail() {
    if (this._tail === null) return undefined;

    let current = this._head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    let removed = this._tail;
    this._tail = previous;
    return removed;
  }

  insert(data, index) {
    if (index < 0) return undefined;

    const newNode = new LinkedListNode(data);

    if (index === 0) {
      newNode.next = this._head;
      this._head = newNode;
    } else {
      let current = this._head;
      let previous = null;

      let i = 0;
      while (current !== null && i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      // found where to insert the new node
      if (current !== null) {
        previous.next = newNode;
        newNode.next = current;
      } else if (previous === this._tail) {
        this.add(data);
      }
    }
    return newNode;
  }

  [Symbol.iterator]() {
    return this.values();
  }

  *values() {
    let current = this._head;

    while (current !== null) {
      yield current;
      current = current.next;
    }
  }
}
