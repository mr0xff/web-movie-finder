export interface Movie {
  imdbID: string;
  Plot: string;
  Genre: string;
  Released: string;
  Ratings: [{
    Source: string;
    Value: string;
  }],
  Poster: string;
}