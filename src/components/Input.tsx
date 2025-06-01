type InputProps = React.PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>;
import clsx from "clsx";

export default function Input(props: InputProps){
  return(
    <input {...props} className={clsx("px-3 py-2 bg-black", props.className)} />
  )
}
