export class Node {
  value: string;
  children: Node[];

  constructor(value: string) {
    this.value = value;
    this.children = [];
  }

  addChild(node: Node) {
    this.children.push(node);
  }
}

const bfs = (startNode: Node, targetValue: string) => {
  const queue: Node[] = [];
  const visited = new Set();
  const path = new Map();

  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (!currentNode) continue;

    if (currentNode.value === targetValue) {
      const pathNodes: Node[] = [];
      let node = currentNode;

      while (node) {
        pathNodes.unshift(node);
        node = path.get(node);
      }

      return pathNodes;
    }

    for (let i = 0; i < currentNode.children.length; i++) {
      const childNode = currentNode.children[i];
      if (!visited.has(childNode)) {
        queue.push(childNode);
        visited.add(childNode);
        path.set(childNode, currentNode);
      }
    }
  }

  return null;
};

export default bfs;
