import BFS from "../assets/bfs.svg";
import DFS from "../assets/dfs.png";
import Bfs from "../components/bfs";
import Dfs from "../components/dfs";
import Ucs from "../components/ucs";

interface SearchType {
  name: string;
  prefix: string;
  description: string;
  image?: string;
  component?: React.FC;
}

const searchTypes: SearchType[] = [
  {
    name: "Busca em Largura",
    prefix: "Largura",
    description:
      "Na teoria dos grafos, busca em largura é um algoritmo de busca em grafos utilizado para realizar uma busca ou travessia num grafo e estrutura de dados do tipo árvore. Intuitivamente, você começa pelo vértice raiz e explora todos os vértices vizinhos. Então, para cada um desses vértices mais próximos, exploramos os seus vértices vizinhos inexplorados e assim por diante, até que ele encontre o alvo da busca.",
    image: BFS,
    component: Bfs,
  },
  {
    name: "Busca em Profundidade",
    prefix: "Profundidade",
    description:
      "Na teoria dos grafos, busca em profundidade é um algoritmo usado para realizar uma busca ou travessia numa árvore, estrutura de árvore ou grafo. Intuitivamente, o algoritmo começa num nó raiz e explora tanto quanto possível cada um dos seus ramos, antes de retroceder.",
    image: DFS,
    component: Dfs,
  },
  {
    name: "Busca de Custo Uniforme",
    prefix: "Uniforme",
    description: "A busca de custo uniforme (Uniform Cost Search - UCS) é um algoritmo de busca utilizado para encontrar o caminho de menor custo em um grafo ponderado. Ao contrário da busca em largura, que explora todos os nós em uma camada antes de passar para a próxima, a UCS leva em consideração o custo de cada aresta ao determinar a ordem de exploração.",
    component: Ucs
  },
  {
    name: "Busca Gulosa",
    prefix: "Gulosa",
    description: "adssdasdadas",
  },
  {
    name: "Busca A*",
    prefix: "A*",
    description: "adssdasdadas",
  },
];

export default searchTypes;
