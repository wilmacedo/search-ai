import { useState } from "react";
import { getTraveledPath } from "./algorithm";
import { allNodes } from "./data";
import "./styles.css";

function Dfs() {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [traveledPath, setTraveledPath] = useState<string[]>([]);

  const handleSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: "initial" | "end"
  ) => {
    const value = event.target.value;
    if (!value) return;

    if (type === "initial") {
      setStartValue(value);
    } else {
      setEndValue(value);
    }
  };

  const handleSearch = () => {
    if (startValue.length === 0 || endValue.length === 0) return;

    const visitedNodes: string[] = [];
    dfs(startValue, endValue, visitedNodes);
    setTraveledPath(visitedNodes);
  };

  const dfs = (currentNode: string, targetNode: string, visitedNodes: string[]) => {
    visitedNodes.push(currentNode);
    if (currentNode === targetNode) {
      return true;
    }

    const children = allNodes.filter((node) => {
      return node !== currentNode && !visitedNodes.includes(node);
    });

    for (let i = 0; i < children.length; i++) {
      const found = dfs(children[i], targetNode, visitedNodes);
      if (found) {
        return true;
      }
    }

    return false;
  };

  return (
    <div>
      <div className="w-fit flex flex-col bg-slate-100 p-4 px-6 rounded-md border border-slate-300 gap-2">
        <h1 className="font-bold">Escolha de trajeto pelo nó</h1>
        <div className="mb-2">
          <span className="text-slate-600">Inicial</span>
          <select
            defaultValue={"default"}
            onChange={(event) => handleSelect(event, "initial")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="default">Escolha um nó</option>
            {allNodes.map((node, index) => (
              <option key={index} value={node}>
                {node.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span className="text-slate-600">Final</span>
          <select
            onChange={(event) => handleSelect(event, "end")}
            defaultValue={"default"}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="default">Escolha um nó</option>
            {allNodes.map((node, index) => (
              <option key={index} value={node}>
                {node.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={endValue.length === 0 || startValue.length === 0}
          className="bg-blue-600 text-white p-2 rounded text-sm hover:bg-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
          onClick={handleSearch}
        >
          Rodar busca
        </button>
      </div>

      <div className="w-[calc(100vw-35rem)]">
        <div className="tree">
          <ul>
            <li>
              <a
                data-selected={traveledPath.includes("a")}
                className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
              data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
              >
                <span>a</span>
              </a>
              <ul>
                <li>
                  <a
                    data-selected={traveledPath.includes("b")}
                    className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                  data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                  >
                    <span>b</span>
                  </a>
                  <ul>
                    <li>
                      <a
                        data-selected={traveledPath.includes("e")}
                        className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                      data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                      >
                        <span>e</span>
                      </a>
                    </li>
                    <li>
                      <a
                        data-selected={traveledPath.includes("f")}
                        className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                      data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                      >
                        <span>f</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    data-selected={traveledPath.includes("c")}
                    className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                  data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                  >
                    <span>c</span>
                  </a>
                </li>
                <li>
                  <a
                    data-selected={traveledPath.includes("d")}
                    className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                  data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                  >
                    <span>d</span>
                  </a>
                  <ul>
                    <li>
                      <a
                        data-selected={traveledPath.includes("g")}
                        className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                      data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                      >
                        <span>g</span>
                      </a>
                    </li>
                    <li>
                      <a
                        data-selected={traveledPath.includes("h")}
                        className="cursor-pointer hover:bg-[#c8e4f8] hover:color-[#000] hover:border-[#94a0b4] 
                      data-[selected=true]:bg-[#c8e4f8] data-[selected=true]:color-[#000] data-[selected=true]:border-[#94a0b4]"
                      >
                        <span>h</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dfs;
