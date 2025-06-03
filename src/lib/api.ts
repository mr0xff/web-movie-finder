import axios from "axios";
const instance = axios.create({ baseURL: "http://www.omdbapi.com" });
import type { Movie, FoundedMovies } from "@/lib/types";
const SERVICE_API_KEY="a67edf09";
import { BrowserCache } from "@/lib/utils";

const browserCache = new BrowserCache();

export async function getTopMovies(){
  const topList = [
    "tt10366206",
    "tt1825683",
    "tt0293429",
    "tt4154796"
  ];
  
  const cachedMovies = browserCache.getTopList();
  
  if(cachedMovies)
    return cachedMovies 
  
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

  browserCache.updateTopList([
    eno.data, 
    two.data, 
    three.data, 
    four.data
  ]);

  return [
    eno.data, 
    two.data, 
    three.data, 
    four.data
  ];
}

export async function findMoviesByName({ 
  title, 
  page 
}:{ 
  title: string; 
  page: number 
}){
  const data = browserCache.getSearchHistory(title);
  
  if(data)
    return data

  const result = await instance.get<FoundedMovies>('/', {
    params: {
      apikey: SERVICE_API_KEY,
      s: title,
      page
    }
  });

  browserCache.addSearchHistory(title, result.data);
  return result.data;
}

export async function getMovieById(id: string){
  const cacheMovie = browserCache.getViewed(id); 
  
  if(cacheMovie)
    return cacheMovie;

  const movie = await instance.get<Movie>("/", {
    params: {
      apikey: SERVICE_API_KEY,
      i: id
    }
  });
  
  browserCache.updateViewed(movie.data);
  return movie.data;
}