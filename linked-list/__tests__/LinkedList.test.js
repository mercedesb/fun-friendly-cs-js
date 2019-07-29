import LinkedList from "../LinkedList.js";
import LinkedListNode from "../LinkedListNode.js";

describe("LinkedList", () => {
  it("has a valid constructor", () => {
    expect(new LinkedList()).toBeInstanceOf(LinkedList);
  });

  it("has a head property", () => {
    const list = new LinkedList();
    expect(list.head).toBeDefined();
    expect(list.head).toBeNull();
  });

  it("has a tail property", () => {
    const list = new LinkedList();
    expect(list.tail).toBeDefined();
    expect(list.tail).toBeNull();
  });

  describe("add", () => {
    describe("when the list is empty", () => {
      it("adds a node as the head and tail of the list", () => {
        const list = new LinkedList();
        list.add(3);
        expect(list.head).toBeInstanceOf(LinkedListNode);
        expect(list.head.data).toEqual(3);
        expect(list.tail).toBeInstanceOf(LinkedListNode);
        expect(list.tail.data).toEqual(3);
        expect(list.head).toEqual(list.tail);
      });
    });

    describe("when the list is not empty", () => {
      it("adds a node to the end of the list", () => {
        const list = new LinkedList();
        list.add(3);
        list.add(7);
        expect(list.tail).toBeInstanceOf(LinkedListNode);
        expect(list.tail.data).toEqual(7);
        expect(list.head).not.toEqual(list.tail);
      });
    });

    it("creates a LinkedListNode with the correct data", () => {
      const list = new LinkedList();
      list.add("dog");
      expect(list.head).toBeInstanceOf(LinkedListNode);
      expect(list.head.data).toEqual("dog");
    });
  });

  describe("removeHead", () => {
    let list;

    describe("when the head is not null", () => {
      beforeEach(() => {
        list = new LinkedList();
        list.add(3);
        list.add(6);
        list.add(7);
        list.add(1);
      });

      it("updates head to the following node", () => {
        list.removeHead();
        expect(list.head.data).toEqual(6);
      });

      it("returns the correct node", () => {
        const node = list.removeHead();
        expect(node).toBeInstanceOf(LinkedListNode);
        expect(node.data).toEqual(3);
      });
    });

    describe("when the head is null", () => {
      beforeEach(() => {
        list = new LinkedList();
      });

      it("returns undefined", () => {
        expect(list.removeHead()).not.toBeDefined();
      });
    });
  });

  describe("removeTail", () => {
    let list;

    describe("when the tail is not null", () => {
      beforeEach(() => {
        list = new LinkedList();
        list.add(3);
        list.add(6);
        list.add(7);
        list.add(1);
      });

      it("updates tail to the previous node", () => {
        list.removeTail();
        expect(list.tail.data).toEqual(7);
      });

      it("returns the correct node", () => {
        const node = list.removeTail();
        expect(node).toBeInstanceOf(LinkedListNode);
        expect(node.data).toEqual(1);
      });
    });

    describe("when the tail is null", () => {
      beforeEach(() => {
        list = new LinkedList();
      });

      it("returns undefined", () => {
        expect(list.removeTail()).not.toBeDefined();
      });
    });
  });

  describe("insert", () => {
    let list;
    beforeEach(() => {
      list = new LinkedList();
      list.add(3);
      list.add(7);
      list.add(1);
    });

    describe("when the index is less than 0", () => {
      it("returns undefined", () => {
        const node = list.insert("new data", -1);
        expect(node).not.toBeDefined();
      });
    });

    describe("when the index is 0", () => {
      it("updates the head to be the new node", () => {
        const initialHead = list.head;
        list.insert("new data", 0);
        expect(list.head).toBeInstanceOf(LinkedListNode);
        expect(list.head.data).toEqual("new data");
        expect(list.head.next).toEqual(initialHead);
      });

      it("returns the correct node", () => {
        const node = list.insert("new data", 0);
        expect(node).toBeInstanceOf(LinkedListNode);
        expect(node.data).toEqual("new data");
      });
    });

    describe("when the index is greater than 0", () => {
      describe("and the index is in the middle of the list", () => {
        it("updates the next pointer of the previous node to the inserted node", () => {
          const initialHead = list.head;
          list.insert("new data", 1);
          const insertedNode = list.head.next;
          expect(insertedNode.data).toEqual("new data");
          expect(initialHead.next).toEqual(insertedNode);
        });

        it("sets the next pointer of the inserted node to the node that was at that position", () => {
          const initialNode = list.head.next;
          list.insert("new data", 1);
          const insertedNode = list.head.next;
          expect(insertedNode.data).toEqual("new data");
          expect(insertedNode.next).toEqual(initialNode);
        });
      });

      describe("and the index is at the end of the list", () => {
        it("updates the next pointer of the previous tail node to the inserted node", () => {
          const initialTail = list.tail;
          list.insert("new data", 3);
          const insertedNode = list.head.next.next.next;
          expect(insertedNode.data).toEqual("new data");
          expect(initialTail.next).toEqual(insertedNode);
        });

        it("updates the tail node to the inserted node", () => {
          list.insert("new data", 3);
          const insertedNode = list.head.next.next.next;
          expect(insertedNode.data).toEqual("new data");
          expect(list.tail).toEqual(insertedNode);
        });
      });
    });
  });

  describe("values (iterator)", () => {
    let list;
    beforeEach(() => {
      list = new LinkedList();
      list.add(3);
      list.add(7);
      list.add(1);
    });

    it("returns each node", () => {
      for (let node of list) {
        expect(node).toBeInstanceOf(LinkedListNode);
      }
    });
  });
});
