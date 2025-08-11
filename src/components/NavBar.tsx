import { useState, useContext } from "react";
import { FiSearch,  } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { SearchInputContext } from "@/lib/contextProvider";
import { BiMoviePlay } from "react-icons/bi";
import { useNavigate, NavLink } from "react-router";
import { useForm } from "@tanstack/react-form";

export default function NavBar() {
  const [query, setQuery] = useState("");
  const inputRef = useContext(SearchInputContext);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      movieName: ""
    },
    onSubmit: ({ value })=>{
      navigate({
        pathname: '/finder',
        search: `name=${value.movieName.trim()}&page=1`
      })
    }
  })

  const clearSearchInput = ()=>{
    setQuery("");
    navigate('/');
  }

  return (
    <nav className="bg-gray-500/10 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <NavLink to="/" aria-label="navlogo">
          <div className="text-xl font-bold text-gray-800 text-white mb-3 md:mb-0 flex gap-x-3 items-center">
            <BiMoviePlay className="size-15 text-red-500" />
            <div>Movie<span className="text-red-500 text-3xl italic">F</span>inder</div>
          </div>
        </NavLink>

        <form
          aria-label="search-input"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex items-center w-full max-w-sm bg-black rounded-xl px-4 py-2 outline-2 outline-red-500"
        >
          <form.Field
            name="movieName"
            validators={{
              onChange: ({ value }) => !value ? "escreva" : undefined
            }}
            children={(field)=>{
              return(
                <input 
                 ref={inputRef}
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  placeholder="Buscar por Título ..."
                  className="flex-grow outline-none bg-transparent"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )
            }}
          />
          <button type="submit" className="hidden md:block hover:text-gray-600">
            <FiSearch size={20} />
          </button>

          {!!query && 
          <button onClick={clearSearchInput} type="button" className="text-red-500 hover:text-red-600">
            <IoCloseOutline size={20} />
          </button>}
        </form>
      </div>
    </nav>
  );
}
