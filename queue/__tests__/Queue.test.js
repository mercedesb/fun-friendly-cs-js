import Queue from "../Queue.js";
import LinkedListNode from "../../linked-list/LinkedListNode.js";

describe("Queue", () => {
  it("has a valid constructor", () => {
    expect(new Queue()).toBeInstanceOf(Queue);
  });

  it("has a head property", () => {
    const queue = new Queue();
    expect(queue.head).toBeDefined();
    expect(queue.head).toBeNull();
  });

  it("has a tail property", () => {
    const queue = new Queue();
    expect(queue.tail).toBeDefined();
    expect(queue.tail).toBeNull();
  });

  describe("enqueue", () => {
    describe("when the queue is empty", () => {
      it("adds a node as the head and tail of the queue", () => {
        const queue = new Queue();
        queue.add(3);
        expect(queue.head).toBeInstanceOf(LinkedListNode);
        expect(queue.head.data).toEqual(3);
        expect(queue.tail).toBeInstanceOf(LinkedListNode);
        expect(queue.tail.data).toEqual(3);
      });
    });

    describe("when the queue is not empty", () => {
      it("adds a node as the tail of the queue", () => {
        const queue = new Queue();
        queue.add(3);
        queue.add(7);
        expect(queue.head).toBeInstanceOf(LinkedListNode);
        expect(queue.head.data).toEqual(3);
        expect(queue.head.next).toBeInstanceOf(LinkedListNode);
        expect(queue.head.next.data).toEqual(7);
        expect(queue.tail).toBeInstanceOf(LinkedListNode);
        expect(queue.tail.data).toEqual(7);
      });
    });

    it("creates a LinkedListNode with the correct data", () => {
      const queue = new Queue();
      queue.enqueue("dog");
      expect(queue.head).toBeInstanceOf(LinkedListNode);
      expect(queue.head.data).toEqual("dog");
    });
  });

  describe("dequeue", () => {
    let queue;
    beforeEach(() => {
      queue = new Queue();
      queue.enqueue(3);
      queue.enqueue(7);
      queue.enqueue(1);
    });

    it("updates head to the following node", () => {
      queue.dequeue();
      expect(queue.head.data).toEqual(7);
    });

    it("returns the correct node", () => {
      const node = queue.dequeue();
      expect(node).toBeInstanceOf(LinkedListNode);
      expect(node.data).toEqual(3);
    });
  });

  describe("remove", () => {
    let queue;
    beforeEach(() => {
      queue = new Queue();
      queue.add(3);
      queue.add(7);
      queue.add(1);
    });

    describe("when the index is 0", () => {
      it("returns the correct node", () => {
        const node = queue.remove(0);
        expect(node).toBeInstanceOf(LinkedListNode);
        expect(node.data).toEqual(3);
      });

      it("updates head to the following node", () => {
        queue.remove(0);
        expect(queue.head.data).toEqual(7);
      });
    });

    describe("when the index is greater than 0", () => {
      it("throws an error", () => {
        expect(() => {
          queue.remove(1);
        }).toThrow();
      });
    });

    describe("when the index is less than 0", () => {
      it("returns undefined", () => {
        const node = queue.remove(-1);
        expect(node).not.toBeDefined();
      });
    });
  });

  describe("insert", () => {
    let queue;
    beforeEach(() => {
      queue = new Queue();
      queue.enqueue(3);
      queue.enqueue(7);
      queue.enqueue(1);
    });

    it("throws an error", () => {
      expect(() => {
        queue.insert("new data", 1);
      }).toThrow();
    });
  });
});
