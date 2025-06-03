import type { Movie } from "@/lib/types";

// armazenamento persisnte localStorage
export class BrowserCache {
  #storageKeys = {
    topMovies: "@toplist", // lista top hero da pagina inicial
    viewed: "@userViews", // todos os filmes clicados
    searchHistory: "@histories", // salvar resultado encontrados das pesquisas
  }

  #viewed = new Map<string, Movie>();

  #resetCounter = 0; 

  updateTopList(data: unknown){
    localStorage.setItem(this.#storageKeys.topMovies, JSON.stringify(data));
  }

  updateViewed(data: Movie){
    this.#viewed.set(data.imdbID, data); // armazenamento na RAM

    if(this.#viewed.size){
      const viewedMovies = Array.from(this.#viewed.values());
      localStorage.setItem(this.#storageKeys.viewed, JSON.stringify(viewedMovies));
    }
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

  getViewedMovies(){
    const data = localStorage.getItem(this.#storageKeys.viewed);
    if(!data)
      return null;
    return JSON.parse(data) as Movie[];
  }

  getSearchHistory(){}

  cacheTTL(){ // tempo de vida util do cache
    this.#resetCounter++;

  }
}