let id = Symbol();
let data = Symbol();

export default class LinkedListNode {
  constructor(value) {
    this[data] = value;
    this.next = null;
  }

  get id() {
    return this[id];
  }

  get data() {
    return this[data];
  }
}
