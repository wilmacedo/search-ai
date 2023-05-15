import { Node } from "./algorithm";

const treeNode = (initialNode: string) => {
  const root = new Node("a", 0);
  const nodeB = new Node("b", 1);
  const nodeC = new Node("c", 2);
  const nodeD = new Node("d", 3);
  const nodeE = new Node("e", 4);
  const nodeF = new Node("f", 5);
  const nodeG = new Node("g", 6);
  const nodeH = new Node("h", 7);

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
