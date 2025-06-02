import { useQuery } from "@tanstack/react-query";
import { findMoviesByName } from "./api";

export function useFindMoviesByName(title: string, page: number){
  return useQuery({
    queryKey: ["findMovies", title, page ],
    queryFn: ()=>findMoviesByName({ title, page }),
  });
}
