import { IoSearchSharp } from "react-icons/io5";
import { useContext } from "react";
import { SearchInputContext } from "@/lib/contextProvider";
import type { SearchInputRef } from "@/lib/types";

export default function SearchMobile(){
  const inputRef = useContext(SearchInputContext) as SearchInputRef;

  return(
    <button 
      onClick={()=>inputRef.current?.focus()} 
      className="z-50 fixed md:hidden bottom-5 right-3 hover:bg-red-400 cursor-pointer active:bg-red-600 p-2 bg-red-500 rounded-full border border-white/25 "
    >
      <IoSearchSharp className="size-10" />
    </button>
  );
}