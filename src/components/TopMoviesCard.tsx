import { getTopMovies } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

export default function TopMoviesCard(){
  const { data, error, isPending } = useQuery({ 
    queryKey: ["topList"],
    queryFn: getTopMovies
  });
  
  if(isPending)
    return <Loading />;

  if(error)
    return <ErrorBoundary />;

  return(
    <div className="my-3">
      <h2 className="uppercase font-bold text-xl">Filmes em Destaque</h2>
      <div className="mt-3 flex gap-x-3 overflow-x-scroll h-96">
      {data.map((props, index) =>(
        <div key={index}>
          <MovieCard
            movie={props}
          />
        </div>
      ))}
    </div>
    </div>
  ) 
}