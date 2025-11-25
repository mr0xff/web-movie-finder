import { BiMoviePlay } from "react-icons/bi";
import { NavLink } from "react-router";
import SearchInput from "@/components/SearchInput";

export default function NavBar() {
  return (
    <nav className="bg-gray-500/10 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <NavLink to="/" aria-label="navlogo">
          <div className="text-xl font-bold text-gray-800 text-white mb-3 md:mb-0 flex gap-x-3 items-center">
            <BiMoviePlay className="size-15 text-red-500" />
            <div>Movie<span className="text-red-500 text-3xl italic">F</span>inder</div>
          </div>
        </NavLink>

        <SearchInput />
      </div>
    </nav>
  );
}
