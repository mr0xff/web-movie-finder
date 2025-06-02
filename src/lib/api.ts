import axios from "axios";
const instance = axios.create({ baseURL: "http://www.omdbapi.com" });
import type { Movie } from "@/lib/types";

export async function getTopMovies(){
  const fallback = await instance.get<Movie>('/?t=hacker');

  return [,,,,].map(()=>fallback.data);
}