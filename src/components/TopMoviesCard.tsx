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
    <div>
      {data.map((props, index) =>(
        <div key={index}>
          <MovieCard
            movie={props}
          />
        </div>
      ))}
    </div>
  ) 
}