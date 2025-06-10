import type { Movie, FoundedMovies } from "@/lib/types";
type SavedMovies = Map<number, FoundedMovies>;

// estratégia de Cache de dados
export class BrowserCache {
  #storageKeys = {
    topMovies: "@toplist", // lista top hero da pagina inicial
    viewed: "@userViews", // todos os filmes clicados
    searchHistory: "@histories", // salvar resultado encontrados das pesquisas
  }

  #viewed = new Map<string, Movie>(); // apenas avaliados
  #clicked = new Map<string, Movie>(); // todos os filmes clicados pelo usuário
  #searchResult = new Map<string, SavedMovies>()

  updateTopList(data: unknown){
    localStorage.setItem(this.#storageKeys.topMovies, JSON.stringify(data));
  }

  updateViewed(data: Movie, onlyRAM=false){
    this.#viewed.set(data.imdbID, data); // armazenamento na RAM
    
    if(!onlyRAM)
      this.#clicked.set(data.imdbID, data);

    if(this.#clicked.size && !onlyRAM){
      const viewedMovies = Array.from(this.#clicked.values());
      const joinedSources = viewedMovies.concat(this.getViewedMovies() ?? []); // mesclar os dados da ram e do disco
      const merged = new Map<string, Movie>();
      joinedSources.map((props)=>merged.set(props.imdbID, props)); // eliminar duplicidade no disco
      localStorage.setItem(this.#storageKeys.viewed, JSON.stringify(Array.from(merged.values())));
    }
  }

  addSearchHistory(
    userQuery: string, 
    page: number, 
    data: FoundedMovies
  ){   
    const movies = new Map<number, FoundedMovies>(this.#searchResult.get(userQuery));
    movies.set(page, data)
    this.#searchResult.set(userQuery, movies);
  }

  getTopList(){
    const data = localStorage.getItem(this.#storageKeys.topMovies);
    return !data ? null: JSON.parse(data) as Movie[];
  }

  getViewed(movieId: string){
    return this.#viewed.get(movieId) ?? null;
  }

  getViewedMovies(){
    const data = localStorage.getItem(this.#storageKeys.viewed);
    if(!data)
      return null;
    return JSON.parse(data) as Movie[];
  }

  getSearchHistory(userQuery: string, page: number){
    return this.#searchResult.get(userQuery)?.get(page) ?? null;
  }
}