import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
  return(
    <footer className="bg-gradient-to-r from-[10%] from-black/25 via-gray-900 to-black/25 to-[99%] flex flex-col items-center p-3 text-gray-300 border-t border-gray-800">
      <div className="font-medium text-center">
        <h2 className="text-xl font-bold">Movie<span className="text-red-500 text-3xl italic">F</span>inder</h2>
        <p className="italic text-xs">Faça uma busca tranquila dos seus filmes</p>
      </div>
      <NavLink to="https://github.com/mr0xff/web-movie-finder" target="_blank" className="flex items-center gap-x-2">
        <FaGithub />
        <span className="font-medium">Código Fonte</span>
      </NavLink>
      <h2>Open Source · MIT License · © 2025</h2>
    </footer>
  )
}