import { Img } from "react-image";
import clsx from "clsx";

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
      className={clsx(
        className,
        "max-w-100"
      )}
    />
  )
}