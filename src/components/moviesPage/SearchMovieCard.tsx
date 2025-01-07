import { FC, memo } from "react";
import { MovieItem } from "../../types";

// Memoized Movie Card for performance optimization
const SearchMovieCard: FC<{ movie: MovieItem }> = memo(({ movie }) => (
  <div
    className="flex items-start bg-white dark:bg-secondary shadow-md rounded-lg p-4 space-x-4"
    role="listitem"
  >
    <img
      src={`${import.meta.env.VITE_REACT_APP_BASE_IMG_URL}/t/p/w500${
        movie.poster_path
      }`}
      alt={`${movie.title} poster`}
      className="w-24 h-36 rounded-lg object-cover"
      loading="lazy"
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
));

export default SearchMovieCard;
