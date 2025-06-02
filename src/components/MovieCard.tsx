import type { Movie } from "@/lib/types";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";
export default function MovieCard({
  movie
}: {
  movie: Movie;
}){
  return(
    <NavLink to={{
      pathname: "/movie",
      search: "id=1000"
    }}>
    <div className="m-1 relative w-60 hover:cursor-pointer hover:scale-110 transition">
      <div className="absolute z-10 top-0 bg-gradient-to-b from-black/50  from-[50%] w-full text-lg px-3 py-2 h-16" />
      <img src={movie.Poster} className="z-0 w-full h-full" />
      <div className="absolute z-10 bottom-0 left-0 bg-gradient-to-t from-black/80 hover:from-black/90 from-[50%] w-full text-lg px-3 py-2">
        <h2 className="font-bold line-clamp-1">{movie.Title}</h2>
        <p className="text-red-400 text-sm font-medium">{movie.Genre}</p>
        <p className="font-bold flex gap-x-2 items-center">
          <FaStar />
          {movie.Ratings[0].Value.split("/")[0]}
        </p>
      </div>
    </div>
    </NavLink>
  )
}