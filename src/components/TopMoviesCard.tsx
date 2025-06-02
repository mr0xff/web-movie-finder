import { getTopMovies } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import Button from "./Button";
import { IoMdInformationCircleOutline } from "react-icons/io";

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
      <div className="h-96 mb-3 bg-[url('https://m.media-amazon.com/images/M/MV5BOTJhMWVmM2QtNzg4NS00Y2Q5LTk0YmYtODg2N2ViZTYwYzA5XkEyXkFqcGc@._V1_SX300.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="w-full flex h-full items-center bg-gradient-to-t from-black/80 from-[60%] px-16 md:pl-32">
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