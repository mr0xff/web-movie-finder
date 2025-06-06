import { Img } from "react-image";
import clsx from "clsx";
import Loading from "./Loading";

export default function Image({ 
  src, 
  className 
}: { 
  src: string; 
  className?: string 
}){
  return(
    <Img
      src={[ src, "/bg.jpg" ]}
      loader={
        <div className="flex justify-center items-center h-96"><Loading /></div>
      }
      className={clsx(
        className,
        "max-w-100"
      )}
    />
  )
}