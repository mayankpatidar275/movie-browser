import { useQuery } from "@tanstack/react-query";
import { QueryParams } from "../types";
import { fetchGenres, fetchMovies } from "../services/api/movies";

export function useMovies(params: QueryParams) {
  return useQuery({
    queryKey: ["movies", params],
    queryFn: () => fetchMovies(params),
    enabled: !!params, // Ensure params are available before fetching
    staleTime: 5 * 60 * 1000, // Optional: Cache data for 5 minutes
  });
}

export function useGenres(params: QueryParams) {
  return useQuery({
    queryKey: ["genres", params],
    queryFn: () => fetchGenres(params),
  });
}
