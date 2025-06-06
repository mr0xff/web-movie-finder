import { useState } from "react";
import type { Movie } from "@/lib/types";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";
import { useGetMovie } from "@/lib/hooks";
import Loading from "@/components/Loading";
import clsx from "clsx";

function ViewRating({ id }:{ id: string }){
  const { data, isPending } =  useGetMovie(id);
  
  if(isPending)
    return <Loading />;
  if(!data?.Ratings)
    return <p>Sem informações</p>;

  return(
    <p className="font-bold flex gap-x-2 items-center">
      <FaStar className={clsx({ "text-yellow-500": Math.round(Number(data.Ratings[0]?.Value.split("/")[0] ?? 0)) >= 7 })} />
      {data.Ratings[0]?.Value.split("/")[0] ?? "Sem avaliação"}
    </p>
  )
}

export default function MovieCard({ 
  movie, 
  enabledRate 
}:{ 
  movie: Movie; 
  enabledRate?: boolean 
}){
  const [ state, setState ] = useState(false);

  return(
    <NavLink to={{
      pathname: "/movie",
      search: `movieId=${movie.imdbID}`
    }}>
      <div
        onMouseOver={()=>{
          if(enabledRate)
            setState(true);
        }} 
        className="m-1 relative w-60 hover:cursor-pointer hover:scale-101 transition min-h-96 outline outline-gray-500/25 hover:outline-gray-500/50"
      >
        <div className="absolute z-10 top-0 bg-gradient-to-b from-black/50 from-[50%] w-full px-3 py-2 h-16" />
        <img src={movie.Poster} className="z-0 w-full h-full" />
        <div className="absolute z-10 bottom-0 left-0 bg-gradient-to-t from-black/80 hover:from-black/90 from-[50%] w-full px-3 py-2">
          <h2 className="font-bold line-clamp-1 text-xl">{movie.Title}</h2>

          {!!movie.Ratings && <p className="font-bold flex gap-x-2 items-center">
            <FaStar />
            {movie?.Ratings[0]?.Value.split("/")[0] ?? "Sem avaliação" }
          </p>}

          { state && <ViewRating id={movie.imdbID} />}
          
          {!!movie.Year && <p className="font-mono">{movie.Year}</p>}
          {!!movie.Type && <p className="italic font-medium">{movie.Type}</p>}
        </div>
      </div>
    </NavLink>
  )
}