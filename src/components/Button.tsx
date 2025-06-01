type ButtonProps = React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button(props:ButtonProps){
  return(
    <button {...props} className="bg-red-500 text-white px-3 py-2 rounded font-medium hover:bg-red-600 hover:cursor-pointer active:bg-red-500 text-lg">{props.children}</button>
  );
}