import treeNode from "./data";

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

const dfs = (currentNode: Node, targetValue: string, visited: Set<Node>, path: Map<Node, Node>): Node[] | null => {
  visited.add(currentNode);

  if (currentNode.value === targetValue) {
    const pathNodes: Node[] = [];
    let node: Node | undefined = currentNode;

    while (node) {
      pathNodes.unshift(node);
      node = path.get(node);
    }

    return pathNodes;
  }

  for (let i = 0; i < currentNode.children.length; i++) {
    const childNode = currentNode.children[i];
    if (!visited.has(childNode)) {
      path.set(childNode, currentNode);
      const result = dfs(childNode, targetValue, visited, path);
      if (result) {
        return result;
      }
    }
  }

  return null;
};

export const getTraveledPath = (initialNode: string, endNode: string) => {
  const startNode = treeNode(initialNode);

  const visited = new Set<Node>();
  const path = new Map<Node, Node>();

  const pathNodes = dfs(startNode || new Node("a"), endNode, visited, path);

  if (!pathNodes) {
    return undefined;
  }

  return pathNodes.map((node) => node.value);
};

export default dfs;