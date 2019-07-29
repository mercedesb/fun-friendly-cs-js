import LinkedListNode from "../LinkedListNode.js";

describe("LinkedListNode", () => {
  it("has a valid constructor", () => {
    expect(new LinkedListNode(2)).toBeInstanceOf(LinkedListNode);
  });

  it("has a data property", () => {
    const node = new LinkedListNode("hi");
    expect(node.data).toBeDefined();
    expect(node.data).toEqual("hi");
  });

  it("has a next property", () => {
    const node = new LinkedListNode("hi");
    expect(node.next).toBeDefined();
    expect(node.next).toBeNull();
  });
});
