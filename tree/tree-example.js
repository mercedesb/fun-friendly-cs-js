import TreeNode from "./TreeNode.js";
import Tree from "./Tree.js";
import { render } from "../shared.js";

function initializeTriwizardMaze() {
  const root = new TreeNode("start");
  const one = new TreeNode({ name: "1", who: "Harry" });
  const two = new TreeNode({ name: "2", who: "Cedric" });
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
  const nine = new TreeNode({ name: "9" });
  const ten = new TreeNode({ name: "10" });
  three.addChild(seven);
  three.addChild(eight);
  six.addChild(nine);
  six.addChild(ten);

  const eleven = new TreeNode({ name: "11" });
  const twelve = new TreeNode({ name: "12" });
  const thirteen = new TreeNode({ name: "13" });
  const fourteen = new TreeNode({ name: "14" });
  const fifteen = new TreeNode({ name: "15" });
  eight.addChild(eleven);
  eight.addChild(twelve);
  ten.addChild(thirteen);
  ten.addChild(fourteen);
  ten.addChild(fifteen);

  const sixteen = new TreeNode({ name: "16", triwizardCup: true });
  const seventeen = new TreeNode({ name: "17" });
  const eighteen = new TreeNode({ name: "18" });
  const nineteen = new TreeNode({ name: "19" });
  eleven.addChild(sixteen);
  eleven.addChild(seventeen);
  fourteen.addChild(eighteen);
  fourteen.addChild(nineteen);

  const twenty = new TreeNode({ name: "20" });
  const twentyone = new TreeNode({ name: "21" });
  const twentytwo = new TreeNode({ name: "22" });
  nineteen.addChild(twenty);
  nineteen.addChild(twentyone);
  nineteen.addChild(twentytwo);

  const twentythree = new TreeNode({ name: "23" });
  const twentyfour = new TreeNode({ name: "24", triwizardCup: true });
  twenty.addChild(twentythree);
  twenty.addChild(twentyfour);

  return new Tree(root);
}

const TriwizardMaze = initializeTriwizardMaze();

function foundTheTriwizardCup(node) {
  return node.data.triwizardCup;
}

document
  .querySelector(".TreeButton--HarryWorstIteratively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const harrysRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Harry"
    );
    const route = TriwizardMaze.iterativeBreadthFirstSearch(
      harrysRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--HarryWorstRecursively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const harrysRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Harry"
    );
    const route = TriwizardMaze.recursiveBreadthFirstSearch(
      harrysRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--HarryBestIteratively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const harrysRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Harry"
    );
    const route = TriwizardMaze.iterativeDepthFirstSearch(
      harrysRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--HarryBestRecursively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const harrysRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Harry"
    );
    const route = TriwizardMaze.recursiveDepthFirstSearch(
      harrysRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--CedricWorstIteratively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const cedricsRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Cedric"
    );
    const route = TriwizardMaze.iterativeBreadthFirstSearch(
      cedricsRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--CedricWorstRecursively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const cedricsRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Cedric"
    );
    const route = TriwizardMaze.recursiveBreadthFirstSearch(
      cedricsRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--CedricBestIteratively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const cedricsRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Cedric"
    );
    const route = TriwizardMaze.iterativeDepthFirstSearch(
      cedricsRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

document
  .querySelector(".TreeButton--CedricBestRecursively")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const cedricsRouteEntry = TriwizardMaze.root.children.find(
      node => node.data.who === "Cedric"
    );
    const route = TriwizardMaze.recursiveDepthFirstSearch(
      cedricsRouteEntry,
      foundTheTriwizardCup
    );
    renderRoute(route);
  });

function renderRoute(route) {
  let template = route.join(" -> ");
  render(template, document.querySelector(".Tree"));
}
