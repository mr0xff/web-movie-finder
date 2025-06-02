import { BrowserRouter, Route, Routes } from "react-router";

import Home from "@/routes/Home";
import Finder from "@/routes/Finder";
import Layout from "@/components/Layout";
import MovieDetails from "@/routes/MovieDetails";


export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/finder" element={<Finder />} />
          <Route path="/movie" element={<MovieDetails />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}