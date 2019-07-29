import Tree from "../Tree.js";
import TreeNode from "../TreeNode.js";

function successCriteria(node) {
  return node.data.success;
}

describe("Tree", () => {
  it("has a valid constructor", () => {
    expect(new Tree()).toBeInstanceOf(Tree);
  });

  describe("searchMethods", () => {
    let tree;
    beforeEach(() => {
      const root = new TreeNode({ name: "root" });
      const one = new TreeNode({ name: "1" });
      const two = new TreeNode({ name: "2" });
      root.addChild(one);
      root.addChild(two);

      const three = new TreeNode({ name: "3" });
      const four = new TreeNode({ name: "4" });
      const five = new TreeNode({ name: "5" });
      const six = new TreeNode({ name: "6" });
      one.addChild(three);
      one.addChild(four);
      two.addChild(five);
      two.addChild(six);

      const seven = new TreeNode({ name: "7" });
      const eight = new TreeNode({ name: "8" });
      const nine = new TreeNode({ name: "9", success: true });
      const ten = new TreeNode({ name: "10" });
      const eleven = new TreeNode({ name: "11" });
      const twelve = new TreeNode({ name: "12" });
      const thirteen = new TreeNode({ name: "13" });
      const fourteen = new TreeNode({ name: "14" });
      three.addChild(seven);
      three.addChild(eight);
      four.addChild(nine);
      four.addChild(ten);
      five.addChild(eleven);
      five.addChild(twelve);
      six.addChild(thirteen);
      six.addChild(fourteen);
      tree = new Tree(root);
    });

    describe("BFS", () => {
      const expectedPath = [
        "root",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Success!"
      ];

      describe("iterativeBreadthFirstSearch", () => {
        it("finds and returns the correct node", () => {
          const searchPath = tree.iterativeBreadthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.pop()).toEqual("Success!");
          expect(searchPath.pop()).toEqual("9");
        });

        it("searches breadth first", () => {
          const searchPath = tree.iterativeBreadthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.length).toEqual(expectedPath.length);

          for (let i = 0; i < searchPath.length; i++) {
            expect(searchPath[i]).toEqual(expectedPath[i]);
          }
        });
      });

      describe("recursiveBreadthFirstSearch", () => {
        it("finds and returns the correct node", () => {
          const searchPath = tree.recursiveBreadthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.pop()).toEqual("Success!");
          expect(searchPath.pop()).toEqual("9");
        });

        it("searches breadth first", () => {
          const searchPath = tree.recursiveBreadthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.length).toEqual(expectedPath.length);

          for (let i = 0; i < searchPath.length; i++) {
            expect(searchPath[i]).toEqual(expectedPath[i]);
          }
        });
      });
    });

    describe("DFS", () => {
      const expectedPath = [
        "root",
        "2",
        "6",
        "14",
        "13",
        "5",
        "12",
        "11",
        "1",
        "4",
        "10",
        "9",
        "Success!"
      ];

      describe("iterativeDepthFirstSearch", () => {
        it("finds and returns the correct node", () => {
          const searchPath = tree.iterativeDepthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.pop()).toEqual("Success!");
          expect(searchPath.pop()).toEqual("9");
        });

        it("searches depth first", () => {
          const searchPath = tree.iterativeDepthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.length).toEqual(expectedPath.length);

          for (let i = 0; i < searchPath.length; i++) {
            expect(searchPath[i]).toEqual(expectedPath[i]);
          }
        });
      });

      describe("recursiveDepthFirstSearch", () => {
        it("finds and returns the correct node", () => {
          const searchPath = tree.recursiveDepthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.pop()).toEqual("Success!");
          expect(searchPath.pop()).toEqual("9");
        });

        it("searches depth first", () => {
          const searchPath = tree.recursiveDepthFirstSearch(
            tree.root,
            successCriteria
          );
          expect(searchPath.length).toEqual(expectedPath.length);

          for (let i = 0; i < searchPath.length; i++) {
            expect(searchPath[i]).toEqual(expectedPath[i]);
          }
        });
      });
    });
  });
});
