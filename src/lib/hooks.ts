import { useQuery } from "@tanstack/react-query";
import { findMoviesByName } from "./api";

export function useFindMoviesByName(title: string){
  return useQuery({
    queryKey: ["findMovies", title],
    queryFn: ()=>findMoviesByName({ title }),
  });
}
