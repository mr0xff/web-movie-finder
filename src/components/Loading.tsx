import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading(){
  return(
    <div className="flex gap-x-3 items-center" aria-label="loading">
      <AiOutlineLoading3Quarters aria-label="icon" className="font-bold size-8 animate-spin" />
      <span>Carregando ...</span>
    </div>
  )
}