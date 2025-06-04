import { MdOutlineSick } from "react-icons/md";

export default function ErrorBoundary({ message }: { message?: string }){
  return(
    <div className="text-xl text-center text-red-500 font-bold uppercase flex flex-col items-center gap-y-4">
      <MdOutlineSick aria-label="icon" className="size-30 text-white" />
      <p>{message?message:"Opps!! Ocorrou um erro !!!"}</p>
    </div>
  )
}