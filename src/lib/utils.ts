import type { Movie, FoundedMovies } from "@/lib/types";

// armazenamento persisnte localStorage
export class BrowserCache {
  #storageKeys = {
    topMovies: "@toplist", // lista top hero da pagina inicial
    viewed: "@userViews", // todos os filmes clicados
    searchHistory: "@histories", // salvar resultado encontrados das pesquisas
  }

  #viewed = new Map<string, Movie>();
  #foundedResult = new Map<string, FoundedMovies>();

  #resetCounter = 0; 

  updateTopList(data: unknown){
    localStorage.setItem(this.#storageKeys.topMovies, JSON.stringify(data));
  }

  updateViewed(data: Movie){
    this.#viewed.set(data.imdbID, data); // armazenamento na RAM

    if(this.#viewed.size){
      const viewedMovies = Array.from(this.#viewed.values());
      const joinedSources = viewedMovies.concat(this.getViewedMovies() ?? []); // mesclar os dados da ram e do disco
      const merged = new Map<string, Movie>();
      joinedSources.map((props)=>merged.set(props.imdbID, props)); // eliminar duplicidade no disco
      localStorage.setItem(this.#storageKeys.viewed, JSON.stringify(Array.from(merged.values())));
    }
  }

  addSearchHistory(userQueryString: string, data: FoundedMovies){
    this.#foundedResult.set(userQueryString, data);
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

  getSearchHistory(userQueryString: string){
    return this.#foundedResult.get(userQueryString);
  }

  cacheTTL(){ // tempo de vida util do cache
    this.#resetCounter++;

  }
}