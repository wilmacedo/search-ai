import { useState } from "react";

function App() {
  const [selectedSearch, setSelectedSearch] = useState(0);

  const searchTypes = ["Largura", "Profundidade", "Uniforme", "Gulosa"];

  const handleSearchType = (type: string) => {
    const index = searchTypes.findIndex((searchType) => searchType === type);
    if (index < 0) return;

    setSelectedSearch(index);
  };

  return (
    <header className="font-sans bg-slate-100 w-fit h-screen shadow-md">
      <section className="p-4 flex flex-row gap-4">
        {searchTypes.map((type, index) => (
          <button
            className={`text-sm text-slate-600 hover:text-slate-950 data-[selected=true]:text-slate-950`}
            key={index}
            data-selected={searchTypes[selectedSearch] === type}
            onClick={() => handleSearchType(type)}
          >
            {type}
          </button>
        ))}
      </section>
    </header>
  );
}

export default App;
