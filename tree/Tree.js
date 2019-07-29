import Queue from "../queue/Queue.js";
import Stack from "../stack/Stack.js";

export default class Tree {
  constructor(root) {
    this.root = root;
  }

  iterativeBreadthFirstSearch(rootNode, successCriteria) {
    // Check that a root node exists.
    if (rootNode === null) return;

    // Create our queue and push our root node into it.
    const visitedNodes = new Queue();
    visitedNodes.enqueue(rootNode);
    let foundNode, currentNode;
    const searchPath = [];

    // Continue searching through as queue as long as it's not empty.
    while (visitedNodes.tail !== null && !foundNode) {
      currentNode = visitedNodes.dequeue().data;
      searchPath.push(currentNode.data.name);

      foundNode = successCriteria(currentNode);
      if (foundNode) searchPath.push("Success!");

      for (let child of currentNode.children) {
        if (child) {
          visitedNodes.enqueue(child);
        }
      }
    }

    return searchPath;
  }

  recursiveBreadthFirstSearch(rootNode, successCriteria) {
    const visitedNodes = new Queue();
    visitedNodes.enqueue(rootNode);
    const searchPath = [];
    this.recursiveBFSLogic(visitedNodes, successCriteria, searchPath);
    return searchPath;
  }

  recursiveBFSLogic(visitedNodes, successCriteria, searchPath) {
    if (visitedNodes.tail === null) {
      return; // if the queue is empty, we're done.
    }

    const currentNode = visitedNodes.dequeue().data;
    searchPath.push(currentNode.data.name);

    const foundNode = successCriteria(currentNode);

    if (foundNode) {
      searchPath.push("Success!");
      visitedNodes = new Queue(); // if we found a successful path, we're done
    } else {
      for (let child of currentNode.children) {
        if (child) {
          visitedNodes.enqueue(child);
        }
      }
    }

    this.recursiveBFSLogic(visitedNodes, successCriteria, searchPath);
  }

  iterativeDepthFirstSearch(rootNode, successCriteria) {
    // Check that a root node exists.
    if (rootNode === null) return;

    // Create our queue and push our root node into it.
    const visitedNodes = new Stack();
    visitedNodes.push(rootNode);
    let foundNode, currentNode;
    const searchPath = [];

    // Continue searching through as stack as long as it's not empty.
    while (visitedNodes.head !== null && !foundNode) {
      currentNode = visitedNodes.pop().data;
      searchPath.push(currentNode.data.name);

      foundNode = successCriteria(currentNode);
      if (foundNode) searchPath.push("Success!");

      for (let child of currentNode.children) {
        if (child) {
          visitedNodes.push(child);
        }
      }
    }

    return searchPath;
  }

  recursiveDepthFirstSearch(rootNode, successCriteria) {
    const visitedNodes = new Stack();
    visitedNodes.push(rootNode);
    const searchPath = [];
    this.recursiveDFSLogic(visitedNodes, successCriteria, searchPath);
    return searchPath;
  }

  recursiveDFSLogic(visitedNodes, successCriteria, searchPath) {
    if (visitedNodes.head === null) {
      return; // if the stack is empty, we're done.
    }

    const node = visitedNodes.pop().data;
    searchPath.push(node.data.name);

    const foundNode = successCriteria(node);

    if (foundNode) {
      searchPath.push("Success!");
      visitedNodes = new Stack(); // if we found a successful path, we're done
    } else {
      for (let child of node.children) {
        if (child) {
          visitedNodes.push(child);
        }
      }
    }
    this.recursiveDFSLogic(visitedNodes, successCriteria, searchPath);
  }
}
