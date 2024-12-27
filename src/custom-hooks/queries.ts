import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";
import { QueryParams, SearchQueryParams } from "../types";
import {
  fetchGenres,
  fetchMovieById,
  fetchMovies,
  fetchSearchedMovies,
} from "../services/api/movies";

export function useMovies(params: QueryParams) {
  return useInfiniteQuery({
    queryKey: ["movies", params],
    queryFn: (p) => fetchMovies(params, p),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      if (nextPage > lastPage.total_pages) return undefined;
      return nextPage;
    },
    enabled: !!params, // Ensure params are available before fetching
    staleTime: 5 * 60 * 1000, // Optional: Cache data for 5 minutes
  });
}

export function useSearchedMovies(params: SearchQueryParams) {
  return useQuery({
    queryKey: ["searchedMovies", params],
    queryFn: () => fetchSearchedMovies(params),
    enabled: params.query.length > 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useMoviesById(movieIds: string[]) {
  return useQueries({
    queries: movieIds.map((movieId) => {
      return {
        queryKey: ["movieId", movieId],
        queryFn: () => fetchMovieById(movieId),
        enabled: !!movieId,
        staleTime: 5 * 60 * 1000,
      };
    }),
  });
}

export function useGenres(params: QueryParams) {
  return useQuery({
    queryKey: ["genres", params],
    queryFn: () => fetchGenres(params),
  });
}
