import { MovieItem } from "../../../types";
import Cross from "../../Icons/Cross";

interface MovieModalProps {
  closeCb: () => void;
  movie: MovieItem;
}

export default function MovieModal({ closeCb, movie }: MovieModalProps) {
  return (
    <div
      className="w-[100vw] h-[100vh] fixed top-0 left-0 z-[1000]"
      onClick={closeCb}
    >
      <div className="modal-bg bg-secondary opacity-50 top-0 left-0"></div>
      <div
        className="p-10 translate-x-1/2 translate-y-1/2 h-1/2 w-1/2 z-50 absolute isolate aspect-video rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="top-6 right-0 absolute" onClick={closeCb}>
          <Cross />
        </button>
        <div className="movie-data flex h-full items-center gap-4">
          <div className="movie-img flex-1 h-full">
            <div className="h-full flex items-center rounded-xl overflow-hidden">
              <img
                src={`${import.meta.env.VITE_REACT_APP_BASE_IMG_URL}/t/p/w500${
                  movie.poster_path
                }`}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 my-auto"
              />
            </div>
          </div>
          <div className="movie-details flex-1 text-primary  flex flex-col rounded-xl p-2 h-full">
            <div className="text-2xl mb-2">
              {movie.title + " "}
              {"(" + movie.release_date.slice(0, 4) + ")"}
            </div>
            {/* TODO: Improve this */}
            {/* <div>{movie.overview.slice(0, 200) + "..." + "Read more"}</div> */}
            <div>{movie.overview.slice(0, 200) + "..."}</div>
            <div className="mt-auto">
              Rating: {movie.vote_average.toFixed(2)}/10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
