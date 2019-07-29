import LinkedList from "../linked-list/LinkedList.js";

export default class Queue extends LinkedList {
  constructor() {
    super();
  }

  enqueue(data) {
    this.add(data);
  }

  dequeue() {
    const dequeued = this._head;
    this._head = this._head.next;
    return dequeued;
  }

  // override default remove behavior
  remove(index) {
    if (index > 0) throw new Error("Can't remove from the middle of a queue");
    return super.remove(index);
  }

  insert(_data, _index) {
    throw new Error("Can't insert into the middle of a queue");
  }
}
