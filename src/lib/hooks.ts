import { useQuery } from "@tanstack/react-query";
import { findMoviesByName, getTopMovies, getMovieById } from "@/lib/api";
import type { Movie } from "@/lib/types";
import { BrowserCache } from "@/lib/utils";

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

export function useGetMovie(id: string){
  return useQuery<Movie>({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id)
  });
}

export function useGetViewedMovies(){
  return useQuery<Movie[] | null>({
    queryKey: ["movies"],
    queryFn: ()=> new Promise((resolve)=>{
      const browserCache = new BrowserCache();
      resolve(browserCache.getViewedMovies())
    })
  });
}