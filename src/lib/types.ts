export interface Movie {
  imdbID: string;
  Title: string;
  Plot: string;
  Genre: string;
  Released: string;
  Ratings?: [{
    Source: string;
    Value: string;
  }],
  Poster: string;
  Year?: string;
  Type?: string;
}

export interface FoundedMovies {
  Search: Movie[];
  totalResults: number;
}

export interface NotFoundMovies {
  Error: string;
}

export type SearchInputRef = React.RefObject<HTMLInputElement>;