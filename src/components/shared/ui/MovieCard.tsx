import { Heart } from "lucide-react";
import { useState } from "react";

interface MovieCardProps {
  movie: {
    title: string;
    poster_path: string;
    release_date: string;
    id: number;
  };
}

function MovieCard({ movie }: MovieCardProps) {
  const { title, poster_path, release_date, id } = movie;
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(id);
  });

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (favId: number) => favId !== id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex flex-col items-center bg-secondary rounded-lg shadow-md overflow-hidden max-w-xs cursor-pointer">
      <img
        src={`${
          import.meta.env.VITE_REACT_APP_BASE_IMG_URL
        }/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-lg font-semibold text-primary hover:text-blue-300">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(release_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <button
            onClick={handleFavoriteToggle}
            className={`ml-2 ${
              isFavorite ? "text-red-500" : "text-gray-500"
            } hover:text-red-500`}
            aria-label="Add to favorites"
          >
            <Heart fill={isFavorite ? "1" : ""} size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
