import algorithm, { Node } from "./algorithm";

const getTraveledPath = (initialNode: string, endNode: string) => {
  const root = new Node("A");
  const nodeB = new Node("B");
  const nodeC = new Node("C");
  const nodeD = new Node("D");
  const nodeE = new Node("E");
  const nodeF = new Node("F");
  const nodeG = new Node("G");
  const nodeH = new Node("H");

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

  const path = algorithm(startNode || new Node("A"), endNode);
  if (!path) return undefined;

  return path.map((node) => node.value).join(" -> ");
};

export default getTraveledPath;
