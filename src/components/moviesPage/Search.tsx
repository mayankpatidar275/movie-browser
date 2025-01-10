import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchedMovies } from "../../custom-hooks/queries";
import { MovieItem, SearchQueryParams } from "../../types";
import Cross from "../Icons/Cross";
import SearchIcon from "../Icons/Search";
import LoaderInvert from "../shared/ui/LoaderInvert";
import SearchMovieCard from "./SearchMovieCard";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); // Separate state for input
  const [searchQueryParams, setSearchQueryParams] = useState<SearchQueryParams>(
    { query: "" }
  );

  // Debounce function to optimize API calls
  const debouncedSearchTerm = useCallback(
    debounce((query: string) => {
      setSearchQueryParams({ query });
    }, 300),
    []
  );

  useEffect(() => {
    return () => debouncedSearchTerm.cancel(); // Cleanup debounce on unmount
  }, [debouncedSearchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // Update input value immediately
    debouncedSearchTerm(value); // Trigger debounced API call
  };

  const clearInput = () => {
    setInputValue("");
    setSearchQueryParams({ query: "" });
  };

  const {
    data: movies,
    isLoading,
    isError,
    refetch,
  } = useSearchedMovies(searchQueryParams);

  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] md:w-[60vw] lg:w-[50vw] z-10">
      <form
        className="relative group"
        onSubmit={(e) => {
          e.preventDefault();
          refetch();
        }}
        aria-label="Search Movies Form"
      >
        <SearchIcon />
        <input
          className="focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-3xl py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Search for movies"
          placeholder="Search movies..."
          value={inputValue}
          onChange={handleInputChange}
          onBlur={clearInput}
        />
        <button
          type="button"
          className="absolute top-5 right-1"
          onClick={clearInput}
          aria-label="Clear search input"
        >
          <Cross />
        </button>
      </form>
      <section
        className={`mt-4 h-[60vh] overflow-y-auto ${!inputValue && "hidden"}`}
        aria-live="polite"
      >
        {isLoading && (
          <div className="flex justify-center text-primary mt-6">
            <LoaderInvert size={40} />
          </div>
        )}
        {isError && (
          <div className="text-center mt-4 text-red-500" role="alert">
            Something went wrong! Please try again.
          </div>
        )}
        {movies && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {movies?.results?.map((movie: MovieItem) => (
              <SearchMovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
        {movies?.results?.length === 0 && (
          <div className="text-center text-primary mt-4">No results found.</div>
        )}
      </section>
    </div>
  );
};

export default Search;
