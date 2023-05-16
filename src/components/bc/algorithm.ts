import treeNode from "./data";
import PriorityQueue from "./priorityQueue";

export class Node {
  value: string;
  children: Node[];
  cost: number;

  constructor(value: string, cost: number) {
    this.value = value;
    this.children = [];
    this.cost = cost;
  }

  addChild(node: Node) {
    this.children.push(node);
  }
}

const bestFirstSearch = (startNode: Node, endNode: string): Node[] | null => {
  const priorityQueue = new PriorityQueue<Node>((a: any, b: any) => a.cost - b.cost);
  const visited = new Set<Node>();
  const path = new Map<Node, Node>();

  priorityQueue.enqueue(startNode, 0);

  while (!priorityQueue.isEmpty()) {
    const currentNode = priorityQueue.dequeue();

    if (currentNode!.value === endNode) {
      const pathNodes: Node[] = [];
      let node: Node | undefined = currentNode;

      while (node) {
        pathNodes.unshift(node);
        node = path.get(node);
      }

      return pathNodes;
    }

    visited.add(currentNode!);

    for (let i = 0; i < currentNode!.children.length; i++) {
      const childNode = currentNode!.children[i];
      if (!visited.has(childNode)) {
        const totalCost = currentNode!.cost + childNode.cost;

        if (!priorityQueue.includes(childNode)) {
          childNode.cost = totalCost;
          path.set(childNode, currentNode!);
          priorityQueue.enqueue(childNode, 0);
        } else if (totalCost < childNode.cost) {
          childNode.cost = totalCost;
          path.set(childNode, currentNode!);
          priorityQueue.updatePriority(childNode);
        }
      }
    }
  }

  return null;
};

export const getTraveledPath = (initialNode: string, endNode: string) => {
  const startNode = treeNode(initialNode);

  if (!startNode) {
    return undefined;
  }

  const pathNodes = bestFirstSearch(startNode, endNode);

  if (!pathNodes) {
    return undefined;
  }

  return {
    paths: pathNodes.map((path) => path.value),
    cost: pathNodes[pathNodes.length - 1].cost,
  };
};
