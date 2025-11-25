import { useState, useContext } from "react";
import { FiSearch,  } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { SearchInputContext } from "@/lib/contextProvider";
import { useNavigate } from "react-router";
import { useForm } from "@tanstack/react-form";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const inputRef = useContext(SearchInputContext);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      movieName: ""
    },
    onSubmit: ({ value })=>{
      const params = new URLSearchParams();
      params.set("n", value.movieName.trim());
      params.set("p", "1");

      navigate({
        pathname: '/finder',
        search: params.toString()
      });
    }
  })

  const clearSearchInput = () => {
    setQuery("");
    navigate('/');
  }

  return (
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
              placeholder="Escreva o titulo do filme"
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
  );
}
