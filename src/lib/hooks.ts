import { useQuery } from "@tanstack/react-query";
import { findMoviesByName, getTopMovies } from "./api";

export function useFindMoviesByName(title: string, page: number){
  return useQuery({
    queryKey: ["findMovies", title, page ],
    queryFn: ()=>findMoviesByName({ title, page }),
  });
}

export function useGetTopMovies(){
  return useQuery({
    queryKey: ["topList"],
    queryFn: getTopMovies
  });
}