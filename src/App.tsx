import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/routes/Home";
import Layout from "@/components/Layout";
import { SearchInputContext } from "@/lib/contextProvider";
import { useRef } from "react";
import { QueryClientProvider , QueryClient} from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App(){
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  return(
    <SearchInputContext.Provider value={searchInputRef}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </SearchInputContext.Provider>
  )
}
