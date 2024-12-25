import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import SearchIcon from "../Icons/Search";
import Cross from "../Icons/Cross";
import { useSearchedMovies } from "../../custom-hooks/queries";
import { MovieItem, SearchQueryParams } from "../../types";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(""); // Separate state for input
  const [searchQueryParams, setSearchQueryParams] = useState<SearchQueryParams>(
    {
      query: "",
    }
  );

  // Debounce function to optimize API calls
  const debouncedSearchTerm = useCallback(
    debounce((query: string) => {
      setSearchQueryParams({ query });
    }, 300),
    []
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => debouncedSearchTerm.cancel();
  }, [debouncedSearchTerm]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // Update input value immediately
    debouncedSearchTerm(value); // Trigger debounced API call
  };

  // Clear input
  const clearInput = () => {
    setInputValue(""); // Reset input value
    setSearchQueryParams({ query: "" }); // Reset search query
    debouncedSearchTerm(""); // Ensure no stale debounce calls
  };

  // Query movies with React Query
  const {
    data: movies,
    isLoading,
    isError,
    refetch,
  } = useSearchedMovies(searchQueryParams);

  return (
    <div className="top-1/4 left-1/2 -translate-x-1/2 absolute w-[80vw] md:w-[60vw] z-10">
      <form
        className="group relative"
        onSubmit={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        <SearchIcon />
        <input
          className="focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-3xl py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Search movies"
          placeholder="Search movies..."
          value={inputValue} // Controlled input
          onChange={handleInputChange}
          onBlur={clearInput} // Clear input on blur
        />

        <button
          type="button"
          className="absolute top-5 right-1"
          onClick={clearInput} // Clear input when clicking the cross button
        >
          <Cross />
        </button>
      </form>
      <div className="mt-4 h-[60vh] overflow-y-auto">
        {isLoading && <div className="text-center mt-4">Loading...</div>}
        {isError && (
          <div className="text-center mt-4 text-red-500">
            Something went wrong!
          </div>
        )}
        {movies && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {movies?.results?.map((movie: MovieItem) => (
              <div
                key={movie.id}
                className="flex items-start bg-white dark:bg-secondary shadow-md rounded-lg p-4 space-x-4"
              >
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_BASE_IMG_URL
                  }/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-24 h-36 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {movies && movies?.results?.length === 0 && (
          <div className="text-center text-primary mt-4">No results found</div>
        )}
      </div>
    </div>
  );
};

export default Search;
