import React from "react";
import { useMovies } from "../../custom-hooks/queries";
import { useFilter } from "../../custom-hooks/useFilter";
import MovieCard from "./MovieCard";

function MoviesList() {
  const { state } = useFilter();
  const { data, isLoading, error } = useMovies(state);

  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong fetching movies</div>;

  return (
    <div className="movies-list p-6">
      <div className="heading font-semibold text-3xl dark:text-primary text-secondary">
        Movies
      </div>
      {/* <hr className="w-[100vw] left-0 absolute border-b-2 mt-2" /> */}
      {/* <div className="w-full flex flex-wrap justify-around items-center mt-6 gap-4">
        {data.results.map((item, index) => {
          return <MovieCard key={index} item={item} />;
        })}
      </div> */}
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
