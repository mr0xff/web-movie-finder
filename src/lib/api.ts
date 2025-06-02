import axios from "axios";
const instance = axios.create({ baseURL: "http://www.omdbapi.com" });
import type { Movie } from "@/lib/types";

export async function getTopMovies(){
  const fallback = await instance.get<Movie>('/', {
    params: {
      t: "hacker",
      apikey: "a67edf09"
    }
  });

  return [fallback.data, fallback.data, fallback.data, fallback.data]
}