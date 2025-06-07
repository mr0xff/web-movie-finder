import { useFindMoviesByName } from "@/lib/hooks";
import { useSearchParams } from "react-router";
import { 
  MovieCardLazy, 
  PaginationLazy, 
  ErrorBoundaryLazy, 
  LoadingLazy 
} from "@/components/SplitedComponents";

export default function Finder(){
  const [ searchParams ] = useSearchParams();
  const name = searchParams.get("name"); 
  const page = Number(searchParams.get("page"));
  
  if(!name || !page)
    return <ErrorBoundaryLazy />;
  
  const { data, isPending, isError } = useFindMoviesByName(name, page);

  if(isPending)
    return <LoadingLazy />;
  
  if(isError)
    return <ErrorBoundaryLazy />;

  if(!data?.Search)
    return <ErrorBoundaryLazy message={`O filme "${name}" não foi encontrado!`} />;

  return(
    <main className="flex flex-col items-center">
      <h2 className="font-bold">RESULTADOS DA BUSCA: "{name}"</h2>

      <div className="flex flex-col items-center gap-y-3 mb-16 mt-8 md:grid md:grid-cols-2 lg:grid-cols-4">
        {data?.Search.map((props, index)=>(
          <MovieCardLazy
            key={index}
            movie={props} 
            enabledRate
          />
        ))}
      </div>

      <PaginationLazy pages={data.totalResults > 10?Math.round(data.totalResults/10):1} />
    </main>
  )
}