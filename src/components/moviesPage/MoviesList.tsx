import { useCallback, useMemo, useRef, useState } from "react";
import { useMovies } from "../../custom-hooks/queries";
import { useFilter } from "../../custom-hooks/useFilter";
import { MovieItem } from "../../types";
import Loader from "../shared/ui/Loader";
import MovieCard from "../shared/ui/MovieCard";
import MovieModal from "../shared/ui/MovieModal";

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

  const [showModal, setShowModal] = useState<MovieItem | null>(null);

  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      // Disconnect the previous observer
      if (observerRef.current) observerRef.current.disconnect();

      // Create a new observer
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      // Observe the last element
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  const heading = useMemo(
    () => (
      <header className="p-6">
        <h1 className="heading font-semibold text-3xl dark:text-primary text-secondary">
          Movies
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
          <span className="sr-only">Loading movies...</span>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        {heading}
        <main className="h-screen flex items-center justify-center">
          <div aria-live="polite">
            <p className="text-lg text-red-600 dark:text-red-400">
              Something went wrong fetching movies.
            </p>
          </div>
        </main>
      </>
    );
  }

  if (data && data.pages && data.pages[0]?.results?.length === 0) {
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
    <>
      <section className="movies-list">
        {heading}
        <main className="flex justify-center items-center mt-6 p-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            role="grid"
          >
            {data?.pages.map((page, pageIndex) =>
              page.results.map((movie: MovieItem, index: number) => {
                const isLastMovie =
                  pageIndex === data.pages.length - 1 &&
                  index === page.results.length - 1;

                return (
                  <div
                    key={`${pageIndex}-${index}`}
                    ref={isLastMovie ? lastMovieRef : null}
                    role="gridcell"
                    onClick={() => setShowModal(movie)}
                  >
                    <MovieCard movie={movie} />
                  </div>
                );
              })
            )}
          </div>
        </main>
        {isFetchingNextPage && (
          <div
            className="flex justify-center mt-4"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader size={30} />
            <span className="sr-only">Loading more movies...</span>
          </div>
        )}
      </section>
      {showModal && (
        <MovieModal closeCb={() => setShowModal(null)} movie={showModal} />
      )}
    </>
  );
}

export default MoviesList;
