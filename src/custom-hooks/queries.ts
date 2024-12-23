import { useQuery } from "@tanstack/react-query";
import { QueryParams } from "../types";
import { fetchMovies } from "../services/api/movies";

export function useMovies(params: QueryParams) {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(params),
    enabled: true,
  });
}
