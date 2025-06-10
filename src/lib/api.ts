import axios from "axios";
import type { Movie, FoundedMovies } from "@/lib/types";
import { BrowserCache } from "@/lib/utils";

const SERVICE_API_KEY="a67edf09";
const instance = axios.create({ baseURL: "https://www.omdbapi.com" });
const browserCache = new BrowserCache();

export async function getTopMovies(){
  const topList = [
    "tt4154796",
    "tt4158110",
    "tt10366206",
    "tt1825683",
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
  const data = browserCache.getSearchHistory(title, page);
  
  if(data)
    return data

  const result = await instance.get<FoundedMovies>('/', {
    params: {
      apikey: SERVICE_API_KEY,
      s: title,
      page
    }
  });

  browserCache.addSearchHistory(title, page, result.data);
  return result.data;
}

export async function getMovieById(id: string, onlyRAM = false){
  const cacheMovie = browserCache.getViewed(id); 
  
  if(cacheMovie){
    browserCache.updateViewed(cacheMovie, onlyRAM);
    return cacheMovie;
  }
    
  const movie = await instance.get<Movie>("/", {
    params: {
      apikey: SERVICE_API_KEY,
      i: id
    }
  });
  
  browserCache.updateViewed(movie.data, onlyRAM);
  return movie.data;
}