import { useRef, useState } from "react";
import Router from "@/routes/Router";
import { SearchInputContext, FinderMoviesContext } from "@/lib/contextProvider";
import { QueryClientProvider , QueryClient} from "@tanstack/react-query";
import type { Movie } from "@/lib/types";

const queryClient = new QueryClient();

export default function App(){
  const searchInputRef = useRef<HTMLInputElement>(null);
  const finderMovies = useState<Movie[]>([]);
  
  return(
    <SearchInputContext.Provider value={searchInputRef}>
      <FinderMoviesContext.Provider value={finderMovies}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </FinderMoviesContext.Provider>
    </SearchInputContext.Provider>
  )
}
