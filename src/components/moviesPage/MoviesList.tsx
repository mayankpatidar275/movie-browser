import React from "react";
import { useMovies } from "../../custom-hooks/queries";
import { useFilter } from "../../custom-hooks/useFilter";

function MoviesList() {
  const { state } = useFilter();
  const { data, isLoading, error } = useMovies(state);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong fetching movies</div>;

  if (data) return <div>Movies list</div>;
}

export default MoviesList;
