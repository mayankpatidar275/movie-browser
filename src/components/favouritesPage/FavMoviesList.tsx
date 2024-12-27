import { useEffect, useMemo, useState } from "react";
import MovieCard from "../shared/ui/MovieCard";
import { useMoviesById } from "../../custom-hooks/queries";
import { MovieItem } from "../../types";
import Loader from "../shared/ui/Loader";

function FavMoviesList() {
  const [favMovieIds, setFavMovieIds] = useState<string[]>([]);

  const queriesData = useMoviesById(favMovieIds);

  const isLoading = queriesData.some((query) => query.isLoading);
  const isError = queriesData.some((query) => query.isError);

  // Extract movies from the `data` property of each query result, this solves typescript issue also
  const movies = queriesData
    .map((query) => query.data)
    .filter((movie): movie is MovieItem => !!movie); // Type guard to filter out undefined values

  useEffect(() => {
    const favMoviesLocal = localStorage.getItem("favorites");
    if (favMoviesLocal) {
      const parsedFavMovies = JSON.parse(favMoviesLocal);
      setFavMovieIds(parsedFavMovies);
    }
  }, []);

  const heading = useMemo(
    () => (
      <header className="p-6">
        <h1 className="heading font-semibold text-3xl dark:text-primary text-secondary">
          Favourite Movies
        </h1>
      </header>
    ),
    []
  );

  if (isLoading) {
    return (
      <>
        {heading}
        <main
          className="h-screen flex items-center justify-center"
          aria-live="polite"
          aria-busy="true"
        >
          <Loader size={40} />
          <span className="sr-only">Loading Favourite movies...</span>
        </main>
      </>
    );
  }

  if (isError) {
    return (
      <>
        {heading}
        <main className="h-screen flex items-center justify-center">
          <div aria-live="polite">
            <p className="text-lg text-red-600 dark:text-red-400">
              Something went wrong fetching favourite movies.
            </p>
          </div>
        </main>
      </>
    );
  }

  if (movies && movies.length === 0) {
    return (
      <>
        {heading}
        <main
          className="h-screen text-secondary dark:text-primary flex justify-center mt-4"
          aria-live="polite"
        >
          <p>No movies found!</p>
        </main>
      </>
    );
  }

  return (
    <div>
      {heading}
      <main className="flex justify-center items-center mt-6 p-6">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          role="grid"
        >
          {movies?.map((movie: MovieItem) => {
            return (
              <div key={movie.id} role="gridcell">
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default FavMoviesList;
