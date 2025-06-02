import { useGetMovie } from "@/lib/hooks";
import { useSearchParams } from "react-router";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";

export default function MovieDetails(){
  const [ searchParams ] = useSearchParams();
  const movieId = searchParams.get("movieId");
  
  if(!movieId)
    return <ErrorBoundary />;

  const { data, isPending, isError } = useGetMovie(movieId);
  
  if(isPending)
    return <Loading />;

  if(!data || isError)
    return <ErrorBoundary />;

  return(
    <div className={clsx(
      "h-[100vh] flex flex-col items-center md:px-32 lg:px-96",
      `bg-[url('${data.Poster}')] bg-no-repeat bg-center`
    )}>
      <img src={data.Poster} />
      <div className="flex flex-col gap-y-3 mt-3">
        <h2 className="text-4xl font-bold">{data?.Title}</h2>
        <p className="text-lg">{data?.Plot}</p>
        <p className="font-medium text-sm">{data?.Genre}</p>
        <p className="font-medium">Lançado em: {data.Released}</p>
        {!!data.Ratings &&
          <div className="space-y-3">
            <p className="flex items-center gap-x-3 font-bold">
              <FaStar className={clsx(
                "size-8", 
                {
                  "text-yellow-500" : Number(data?.Ratings[0].Value.split("/")[0]) > 7.0
                }
              )}
              /> 
              {data?.Ratings[0].Value.split("/")[0]}
            </p>
            <p className="text-sm italic text-gray-400">Fonte de Votação: {data?.Ratings[0].Source}</p>
          </div>
        }
      </div>
    </div>
  )
}