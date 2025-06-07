import { lazy } from "react";

export const MovieCardLazy = lazy(()=> import("@/components/MovieCard"));
export const PaginationLazy = lazy(()=>import("@/components/Pagination"));
export const ImageLazy = lazy(()=>import("@/components/Image"));
export const ErrorBoundaryLazy = lazy(()=> import("@/components/ErrorBoundary"));
export const LoadingLazy = lazy(()=>import("@/components/Loading"));
