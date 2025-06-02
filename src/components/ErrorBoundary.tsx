import { MdOutlineSick } from "react-icons/md";

export default function ErrorBoundary({ message }: { message?: string }){
  return(
    <div className="text-xl text-center text-red-500 font-bold uppercase flex flex-col items-center gap-y-4">
      <MdOutlineSick className="size-30 text-white" />
      {message?message:"Opps!! Ocorrou um erro !!!"}
    </div>
  )
}