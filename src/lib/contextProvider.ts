import { createContext } from "react";
import type { Movie } from "./types";

export const SearchInputContext = createContext<React.RefObject<HTMLInputElement | null> | null>(null);
export const FinderMoviesContext = createContext<[Movie[], React.Dispatch<React.SetStateAction<Movie[]>>] | null>(null);
