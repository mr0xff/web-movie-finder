import axios from "axios";
const instance = axios.create({ baseURL: "http://www.omdbapi.com" });
import type { Movie, FoundedMovies } from "@/lib/types";
const SERVICE_API_KEY="a67edf09";

export async function getTopMovies(){
  const fallback = await instance.get<Movie>('/', {
    params: {
      t: "hacker",
      apikey: SERVICE_API_KEY
    }
  });

  return [fallback.data, fallback.data, fallback.data, fallback.data]
}

export async function findMoviesByName({ title }: { title: string }){
  const result = await instance.get<FoundedMovies>('/', {
    params: {
      apikey: SERVICE_API_KEY,
      s: title,
      page: 2
    }
  });

  return result.data;
}