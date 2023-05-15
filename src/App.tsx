import { useState } from "react";
import DF from "./assets/dfs.png";
import Bfs from "./components/bfs";
import data from "./config/data";

function App() {
  const [selectedSearch, setSelectedSearch] = useState(0);

  const handleSearchType = (type: string) => {
    const index = data.findIndex((searchType) => searchType.prefix === type);
    if (index < 0) return;

    setSelectedSearch(index);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="font-sans p-4 bg-slate-100 w-fit h-screen shadow-md fixed">
        <div className="flex flex-row gap-4">
          {data.map((type, index) => (
            <button
              className={`text-sm text-slate-600 hover:text-slate-950 data-[selected=true]:text-slate-950 data-[selected=true]:font-bold`}
              key={index}
              data-selected={data[selectedSearch] === type}
              onClick={() => handleSearchType(type.prefix)}
            >
              {type.prefix}
            </button>
          ))}
        </div>

        <div className="mt-6 w-full flex items-center justify-center">
          <div className="mt-6 bg-white shadow-sm border border-slate-300 rounded-md">
            <img
              className="p-2 w-[10rem] h-[10rem]"
              src={data[selectedSearch].image || DF}
              alt="DF"
            />
          </div>
        </div>

        <div className="mt-6 max-w-[18rem]">
          <h1>{data[selectedSearch].name}</h1>
          <p className="text-sm text-slate-600 break-words">
            {data[selectedSearch].description}
          </p>
        </div>
      </div>

      <div className="pl-[24rem] pt-4 flex items-center justify-center">
        <Bfs />
      </div>
    </div>
  );
}

export default App;
