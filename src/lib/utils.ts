import type { Movie } from "./types";

// armazenamento persisnte localStorage
export class BrowserCache {
  #storageKeys = {
    topMovies: "@toplist", // lista top hero da pagina inicial
    viewed: "@userViews", // 
    searchHistory: "@histories", // salvar resultado encontrados das pesquisas
  }

  #viewed = new Map<string, Movie>();

  #resetCounter = 0; 

  updateTopList(data: unknown){
    localStorage.setItem(this.#storageKeys.topMovies, JSON.stringify(data));
  }

  updateViewed(data: Movie){
    this.#viewed.set(data.imdbID, data); // armazenamento na RAM
  }

  addSearchHistory(data: unknown){
    localStorage.setItem(this.#storageKeys.searchHistory, JSON.stringify(data));
  }

  getTopList(){
    const data = localStorage.getItem(this.#storageKeys.topMovies);
    return !data ? null: JSON.parse(data) as Movie[];
  }

  getViewed(movieId: string){
    return this.#viewed.get(movieId);
  }

  getSearchHistory(){}

  cacheTTL(){ // tempo de vida util do cache
    this.#resetCounter++;

  }
}