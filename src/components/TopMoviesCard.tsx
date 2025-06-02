import { getTopMovies } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";

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
      {JSON.stringify(data)}
    </div>
  ) 
}