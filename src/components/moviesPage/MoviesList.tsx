import React, { useCallback, useMemo, useRef } from "react";
import { useMovies } from "../../custom-hooks/queries";
import { useFilter } from "../../custom-hooks/useFilter";
import MovieCard from "./MovieCard";
import Loader from "../shared/ui/Loader";
import { MovieItem } from "../../types";

function MoviesList() {
  const { state } = useFilter();
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useMovies(state);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      // Disconnect the previous observer
      if (observerRef.current) observerRef.current.disconnect();

      // Create a new observer
      observerRef.current = new IntersectionObserver((entries) => {
        console.log("heeeeeee");
        console.log("helllll", entries[0].isIntersecting, hasNextPage);
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      // Observe the last element
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  const heading = useMemo(() => {
    return (
      <div className="heading font-semibold text-3xl dark:text-primary text-secondary p-6">
        Movies
      </div>
    );
  }, []);

  if (isLoading)
    return (
      <>
        {heading}
        <div className="h-screen flex items-center justify-center ">
          <Loader size={40} />
        </div>
      </>
    );
  if (error)
    return (
      <>
        {heading}
        <div className="h-screen">Something went wrong fetching movies</div>
      </>
    );

  if (
    data &&
    data?.pages &&
    data?.pages[0]?.results &&
    data?.pages[0]?.results?.length == 0
  )
    return (
      <>
        {heading}
        <div className="h-screen flex justify-center text-xl">
          Movies not found!
        </div>
      </>
    );

  return (
    <div className="movies-list">
      {heading}
      <div className="flex justify-center items-center mt-6 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.pages.map((page, pageIndex) =>
            page.results.map((movie: MovieItem, index: number) => {
              const isLastMovie =
                pageIndex === data.pages.length - 1 &&
                index === page.results.length - 1;
              console.log("i last m: ", isLastMovie);
              return (
                <div
                  key={`${pageIndex}-${index}`}
                  ref={isLastMovie ? lastMovieRef : null}
                >
                  <MovieCard movie={movie} />
                </div>
              );
            })
          )}
        </div>
      </div>
      {isFetchingNextPage && (
        <div className="flex justify-center mt-4">
          <Loader size={30} />
        </div>
      )}
    </div>
  );
}

export default MoviesList;
