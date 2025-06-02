import Button from "@/components/Button";
import { IoChevronBackOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";

export default function Pagination({ pages }: { pages: number }){
  return(
    <div className="fixed bottom-0 w-full bg-black flex justify-between z-50 px-8 items-center py-3">
      <button className="flex gap-x-2 items-center">
        <IoChevronBackOutline className="size-7 text-white active:text-red-500 hover:text-red-500" />
      </button>
       <button className="flex gap-x-2 items-center hover:text-red-500">
          <GrFormNext className="size-8 text-white active:text-red-500 hover:text-red-500" />
      </button>  
      <p>3 de {pages}</p> 
    </div>
  )
}