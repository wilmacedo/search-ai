import { Node } from "./algorithm";

const treeNode = (initialNode: string) => {
  const root = new Node("a");
  const nodeB = new Node("b");
  const nodeC = new Node("c");
  const nodeD = new Node("d");
  const nodeE = new Node("e");
  const nodeF = new Node("f");
  const nodeG = new Node("g");
  const nodeH = new Node("h");

  root.addChild(nodeB);
  root.addChild(nodeC);
  root.addChild(nodeD);
  nodeB.addChild(nodeE);
  nodeB.addChild(nodeF);
  nodeD.addChild(nodeG);
  nodeD.addChild(nodeH);

  const startNode = [
    root,
    nodeB,
    nodeC,
    nodeD,
    nodeE,
    nodeF,
    nodeG,
    nodeH,
  ].find((node) => node.value === initialNode);

  return startNode;
};

export const allNodes = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default treeNode;
