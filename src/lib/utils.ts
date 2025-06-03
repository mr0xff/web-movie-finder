import type { Movie } from "./types";

// armazenamento persisnte localStorage
export class BrowserCache {
  #storageKeys = {
    topMovies: "@toplist", // lista top hero da pagina inicial
    viewed: "@userViews", // salvar todos os filmes visualizados
    searchHistory: "@histories", // salvar resultado encontrados das pesquisas
  }
  
  constructor(){

  }

  updateTopList(data: unknown){
    localStorage.setItem(this.#storageKeys.topMovies, JSON.stringify(data));
  }

  updateViewed(data: unknown){
    localStorage.setItem(this.#storageKeys.viewed, JSON.stringify(data));
  }
  addSearchHistory(data: unknown){
    localStorage.setItem(this.#storageKeys.searchHistory, JSON.stringify(data));
  }

  getTopList(){
    const data = localStorage.getItem(this.#storageKeys.topMovies);
    return !data ? null: JSON.parse(data) as Movie[]
  }
  getViewed(){}
  getSearchHistory(){}
}