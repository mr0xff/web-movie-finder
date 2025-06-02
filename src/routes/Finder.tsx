import ErrorBoundary from "@/components/ErrorBoundary";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import { useFindMoviesByName } from "@/lib/hooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export default function Finder(){
  const [ searchParams ] = useSearchParams();
  const name = searchParams.get("name"); 
  
  if(!name)
    return <ErrorBoundary />;
  const { data, isPending, isError } = useFindMoviesByName(name);
  

  useEffect(()=>{
    console.log(data, isPending);  
  }, [isPending])

  if(isPending)
    return <>Carregando...</>;

  if(!data?.Search)
    return <ErrorBoundary message={`O filtro "${name}" não foi encontrado!`} />;
  return(
    <main>
      <h2 className="font-bold">RESULTADOS DA BUSCA: "{name}"</h2>

      <div className="flex flex-col items-center gap-y-3 mb-16">
        {data?.Search.map((props, index)=>(
          <MovieCard
            key={index}
            movie={props} 
          />
        ))}
      </div>

      <Pagination pages={data.totalResults} />
    </main>
  )
}