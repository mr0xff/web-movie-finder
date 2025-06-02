export interface Movie {
  imdbID: string;
  Title: string;
  Plot: string;
  Genre: string;
  Released: string;
  Ratings: [{
    Source: string;
    Value: string;
  }],
  Poster: string;
}

export type SearchInputRef = React.RefObject<HTMLInputElement>;