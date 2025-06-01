import { useState } from "react";
import { FiSearch,  } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

export default function NavBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", query);
    // Trigger search logic here
  };

  return (
    <nav className="bg-gray-500/10 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-bold text-gray-800 text-white">MOVIE FINDER</div>
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2"
        >
          <input
            type="text"
            placeholder="Buscar filme ..."
            className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="text-gray-600 hover:text-blue-600">
            <FiSearch size={20} />
          </button>

          {!!query && 
          <button onClick={()=>setQuery("")} type="button" className="text-gray-600 hover:text-blue-600">
            <IoCloseOutline size={20} />
          </button>}
        </form>
      </div>
    </nav>
  );
}
