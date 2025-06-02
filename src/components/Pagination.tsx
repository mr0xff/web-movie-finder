import { IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

export default function Pagination({ 
  pages
}: { 
  pages: number; 
}){
  const [ search, setSearch ] = useSearchParams();
  const page = Number(search.get("page")) ?? 1;

  const nextPage = () => { 
    if(page < pages){
      search.set("page", (page+1).toString());
      setSearch(search.toString());
    }
  }

  const prevPage = () => {
    if(page > 1){
      search.set("page", (page - 1).toString());
      setSearch(search.toString());
    }
  }

  useEffect(()=> {
    if(page < 1){
      search.set("page", "1");
      setSearch(search.toString());
    }else {
      if (page > pages){
        search.set("page", pages.toString());
        setSearch(search.toString());
      }
    }
  }, []);

  return(
    <div className="fixed bottom-0 w-full bg-black flex justify-between z-50 px-8 items-center py-3">
      <button onClick={prevPage} disabled={page <= 1} className="flex gap-x-2 items-center disabled:opacity-50">
        <IoChevronBackOutline className="size-7 text-white active:text-red-500 hover:text-red-500" />
      </button>
       <button onClick={nextPage} className="flex gap-x-2 items-center hover:text-red-500">
          <GrFormNext className="size-8 text-white active:text-red-500 hover:text-red-500" />
      </button>  
      <p className="font-bold">{page} de {pages}</p> 
    </div>
  )
}