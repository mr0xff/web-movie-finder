import ErrorBoundary from "@/components/ErrorBoundary";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { useFindMoviesByName } from "@/lib/hooks";
import { useSearchParams } from "react-router";
import Loading from "@/components/Loading";

export default function Finder(){
  const [ searchParams ] = useSearchParams();
  const name = searchParams.get("name"); 
  const page = Number(searchParams.get("page"));
  
  if(!name || !page)
    return <ErrorBoundary />;
  
  const { data, isPending, isError } = useFindMoviesByName(name, page);

  if(isPending)
    return <Loading />;
  
  if(isError)
    return <ErrorBoundary />;

  if(!data?.Search)
    return <ErrorBoundary message={`O filtro "${name}" não foi encontrado!`} />;

  return(
    <main className="flex flex-col items-center">
      <h2 className="font-bold">RESULTADOS DA BUSCA: "{name}"</h2>

      <div className="flex flex-col items-center gap-y-3 mb-16 mt-8 md:grid md:grid-cols-4">
        {data?.Search.map((props, index)=>(
          <MovieCard
            key={index}
            movie={props} 
          />
        ))}
      </div>

      <Pagination pages={data.totalResults > 10?Math.round(data.totalResults/10):1} />
    </main>
  )
}