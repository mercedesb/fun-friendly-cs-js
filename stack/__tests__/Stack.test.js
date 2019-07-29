import Stack from "../Stack.js";
import LinkedListNode from "../../linked-list/LinkedListNode.js";

describe("Stack", () => {
  it("has a valid constructor", () => {
    expect(new Stack()).toBeInstanceOf(Stack);
  });

  it("has a head property", () => {
    const stack = new Stack();
    expect(stack.head).toBeDefined();
    expect(stack.head).toBeNull();
  });

  describe("push", () => {
    describe("when the list is empty", () => {
      it("adds a node as the head of the list", () => {
        const stack = new Stack();
        stack.push(3);
        expect(stack.head).toBeInstanceOf(LinkedListNode);
      });
    });

    describe("when the list is not empty", () => {
      it("adds a node as the head of the list", () => {
        const stack = new Stack();
        stack.push(3);
        stack.push(7);
        expect(stack.head).toBeInstanceOf(LinkedListNode);
        expect(stack.head.data).toEqual(7);
        expect(stack.head.next).toBeInstanceOf(LinkedListNode);
        expect(stack.head.next.data).toEqual(3);
      });
    });

    it("creates a LinkedListNode with the correct data", () => {
      const stack = new Stack();
      stack.push("dog");
      expect(stack.head).toBeInstanceOf(LinkedListNode);
      expect(stack.head.data).toEqual("dog");
    });
  });

  describe("pop", () => {
    let stack;
    beforeEach(() => {
      stack = new Stack();
      stack.push(3);
      stack.push(7);
      stack.push(1);
    });

    it("updates head to the following node", () => {
      stack.pop();
      expect(stack.head.data).toEqual(7);
    });

    it("returns the correct node", () => {
      const node = stack.pop();
      expect(node).toBeInstanceOf(LinkedListNode);
      expect(node.data).toEqual(1);
    });
  });

  describe("remove", () => {
    let stack;
    beforeEach(() => {
      stack = new Stack();
      stack.add(3);
      stack.add(7);
      stack.add(1);
    });

    describe("when the index is 0", () => {
      it("updates head to the following node", () => {
        stack.remove(0);
        expect(stack.head.data).toEqual(7);
      });

      it("returns the correct node", () => {
        const node = stack.remove(0);
        expect(node).toBeInstanceOf(LinkedListNode);
        expect(node.data).toEqual(1);
      });
    });

    describe("when the index is greater than 0", () => {
      it("throws an error", () => {
        expect(() => {
          stack.remove(1);
        }).toThrow();
      });
    });

    describe("when the index is less than 0", () => {
      it("returns undefined", () => {
        const node = stack.remove(-1);
        expect(node).not.toBeDefined();
      });
    });
  });

  describe("insert", () => {
    let stack;
    beforeEach(() => {
      stack = new Stack();
      stack.add(3);
      stack.add(7);
      stack.add(1);
    });

    describe("when the index is less than 0", () => {
      it("returns undefined", () => {
        const node = stack.insert("new data", -1);
        expect(node).not.toBeDefined();
      });
    });

    describe("when the index is 0", () => {
      it("updates the head to be the new node", () => {
        const initialHead = stack.head;
        stack.insert("new data", 0);
        expect(stack.head).toBeInstanceOf(LinkedListNode);
        expect(stack.head.data).toEqual("new data");
        expect(stack.head.next).toEqual(initialHead);
      });

      it("returns the correct node", () => {
        const node = stack.insert("new data", 0);
        expect(node).toBeInstanceOf(LinkedListNode);
        expect(node.data).toEqual("new data");
      });
    });

    describe("when the index is greater than 0", () => {
      it("throws an error", () => {
        expect(() => {
          stack.insert("new data", 1);
        }).toThrow();
      });
    });
  });
});
