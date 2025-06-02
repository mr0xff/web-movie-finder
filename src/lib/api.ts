import axios from "axios";
const instance = axios.create({ baseURL: "http://www.omdbapi.com" });
import type { Movie, FoundedMovies } from "@/lib/types";
const SERVICE_API_KEY="a67edf09";

export async function getTopMovies(){
  const topList = [
    "tt10366206",
    "tt1825683",
    "tt0293429",
    "tt4154796"
  ];
  
  const apiList = topList.map((id) => instance.get<Movie>('/', {
    params: {
      i: id,
      apiKey: SERVICE_API_KEY
    }
  }));

  const [
    eno,
    two,
    three,
    four
  ] = await Promise.all(apiList);

  return [
    eno.data, 
    two.data, 
    three.data, 
    four.data
  ];
}

export async function findMoviesByName({ title, page }: { title: string; page: number }){
  const result = await instance.get<FoundedMovies>('/', {
    params: {
      apikey: SERVICE_API_KEY,
      s: title,
      page
    }
  });

  return result.data;
}