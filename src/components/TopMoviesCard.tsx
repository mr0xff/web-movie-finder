import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import MovieCard from "@/components/MovieCard";
import Button from "@/components/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useGetTopMovies, useGetViewedMovies } from "@/lib/hooks";

export default function TopMoviesCard(){
  const { data, error, isPending } = useGetTopMovies();
  const query = useGetViewedMovies();
  
  if(isPending)
    return <Loading />;

  if(error)
    return <ErrorBoundary />;

  return(
    <div className="my-3">
      <div className="h-96 mb-3 rounded-xl bg-[url('https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_SX300.jpg')] bg-no-repeat bg-contain bg-center">
        <div className="w-full flex h-full items-center bg-gradient-to-t from-black from-[10%] px-16 md:pl-32">
          <div className="w-full">
            <p className="uppercase text-white/50 text-sm font-medium">Destaque</p>
            <h2 className="text-5xl font-bold">{data[0].Title}</h2>
            <div className="flex flex-col md:flex-row gap-x-3 w-full my-4">
              <p className="font-medium">{data[0].Genre}</p> <span className="hidden md:block">-</span>
              <p className="font-medium">{data[0].Released}</p>
            </div>
            <Button className="flex gap-x-2 items-center">
              <IoMdInformationCircleOutline className="size-7" />
              Saber mais
            </Button>
          </div>
        </div>
      </div>

      <h2 className="uppercase font-bold text-xl">Filmes em Destaque</h2>
      <div className="mt-3 flex gap-x-3 overflow-x-auto h-96 scroll-none w-[100vw] md:max-w-[75vw]">
        {data.map((props, index) => <MovieCard key={index} movie={props} />)}
      </div>

      { !!query.data &&
        <>
          <h2 className="uppercase font-bold text-xl">Filmes Visualizados</h2>
          <div className="mt-3 flex gap-x-3 overflow-x-auto h-96 scroll-none w-[100vw] md:max-w-[75vw]">
            {query.data?.map((props, index) => <MovieCard key={index} movie={props} />)}
          </div>
        </>
      }
    </div>
  ) 
}