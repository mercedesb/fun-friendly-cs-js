export default class TreeNode {
  constructor(value) {
    this.data = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}
