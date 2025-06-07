import { useGetMovie } from "@/lib/hooks";
import { useSearchParams } from "react-router";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { 
  ErrorBoundaryLazy, 
  ImageLazy, 
  LoadingLazy 
} from "@/components/SplitedComponents";

export default function MovieDetails(){
  const [ searchParams ] = useSearchParams();
  const movieId = searchParams.get("movieId");
  
  if(!movieId)
    return <ErrorBoundaryLazy />;

  const { data, isPending, isError } = useGetMovie(movieId);
  
  if(isPending)
    return <LoadingLazy />;

  if(!data || isError)
    return <ErrorBoundaryLazy message="Erro no servidor" />;

  return(
    <div className={clsx(
      "h-[100vh] flex flex-col items-center md:mx-[20vw]",
    )}>
      <ImageLazy src={data.Poster} />
      <div className="flex flex-col gap-y-3 my-3">
        <h2 className="text-4xl font-bold">{data?.Title}</h2>
        <p className="text-lg">{data?.Plot}</p>
        <p className="font-medium text-sm">{data?.Genre}</p>
        <p className="font-medium">Lançado em: {data.Released}</p>
        {!!data.Ratings &&
          <div className="space-y-3 mb-8">
            <p className="flex items-center gap-x-3 font-bold">
              <FaStar className={clsx(
                "size-8", 
                {
                  "text-yellow-500" : Number(data?.Ratings[0]?.Value.split("/")[0]) > 7.0
                }
              )}
              /> 
              {data?.Ratings[0]?.Value.split("/")[0] ?? "Sem avaliação"}
            </p>
            <p className="text-sm italic text-gray-400">Fonte de Votação: {data?.Ratings[0]?.Source ?? "Sem fonte"}</p>
          </div>
        }
      </div>
    </div>
  )
}