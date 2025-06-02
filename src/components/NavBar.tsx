import { useState, useEffect, useContext } from "react";
import { FiSearch,  } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import type { SearchInputRef } from "@/lib/types";
import { SearchInputContext } from "@/lib/contextProvider";
import { BiMoviePlay } from "react-icons/bi";

export default function NavBar() {
  const [query, setQuery] = useState("");
  const inputRef = useContext(SearchInputContext) as SearchInputRef;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", query);
    alert(query);
    // Trigger search logic here
  };
  
  useEffect(()=>{
    inputRef.current?.focus();
    console.log(inputRef.current);
  }, []);

  return (
    <nav className="bg-gray-500/10 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-bold text-gray-800 text-white mb-3 md:mb-0 flex gap-x-3 items-center">
          <BiMoviePlay className="size-15 text-red-500" />
          <div>Movie<span className="text-red-500 text-3xl italic">F</span>inder</div>
        </div>
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-md bg-black rounded-full px-4 py-2 outline-2 outline-red-500"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar filme ..."
            className="flex-grow outline-none bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="hidden md:block hover:text-gray-600">
            <FiSearch size={20} />
          </button>

          {!!query && 
          <button onClick={()=>setQuery("")} type="button" className="text-red-500 hover:text-red-600">
            <IoCloseOutline size={20} />
          </button>}
        </form>
      </div>
    </nav>
  );
}
