type ButtonProps = React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>;

import clsx from "clsx";

export default function Button(props:ButtonProps){
  return(
    <button {...props} className={clsx(
      "bg-red-500 text-white px-3 py-2 rounded-xl font-medium hover:bg-red-600 hover:cursor-pointer active:bg-red-500 text-lg",
      props.className
    )}>{props.children}</button>
  );
}