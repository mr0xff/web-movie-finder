import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import MovieCard from "@/components/MovieCard";
import Button from "@/components/Button";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useGetTopMovies, useGetViewedMovies } from "@/lib/hooks";
import clsx from "clsx";

export default function TopMoviesCard(){
  const { data, error, isPending } = useGetTopMovies();
  const query = useGetViewedMovies();
  
  if(isPending)
    return <Loading />;

  if(error)
    return <ErrorBoundary />;

  return(
    <div className="flex flex-col items-center mb-32">
      <div className={clsx(
        "h-96 mb-3 rounded-xl",
        `bg-[url(https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg)] bg-no-repeat bg-center`
      )}>
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

      <h2 className="uppercase font-bold text-xl self-start">Filmes em Destaque</h2>
      <div className="my-8 flex overflow-x-auto w-screen md:w-[55vw] md:flex-none md:grid md:grid-cols-2 lg:grid-cols-4 my-8 gap-x-3 md:gap-x-0">
        {data.map((props, index) => <MovieCard key={index} movie={props} />)}
      </div>

      { !!query.data &&
        <>
          <h2 className="uppercase font-bold text-xl self-start">Filmes Visualizados</h2>
          <div className="my-8 flex w-screen overflow-x-auto md:w-[55vw]">
            {query.data?.map((props, index) => <MovieCard key={index} movie={props} />)}
          </div>
        </>
      }
    </div>
  ) 
}