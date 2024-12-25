import React, { useEffect } from "react";
import { useMovies } from "../../custom-hooks/queries";
import { useFilter } from "../../custom-hooks/useFilter";
import MovieCard from "./MovieCard";
import Loader from "../shared/ui/Loader";

function MoviesList() {
  const { state } = useFilter();
  const { data, isLoading, error } = useMovies(state);

  console.log(data);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loader size={40} />
      </div>
    );
  if (error)
    return <div className="h-screen">Something went wrong fetching movies</div>;

  return (
    <div className="movies-list p-6">
      <div className="heading font-semibold text-3xl dark:text-primary text-secondary">
        Movies
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.results.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
