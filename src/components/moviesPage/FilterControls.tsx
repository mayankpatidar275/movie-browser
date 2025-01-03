import { RESET_FILTERS, SET_FILTER } from "../../constants/actions";
import { useGenres } from "../../custom-hooks/queries";
import { useFilter } from "../../custom-hooks/useFilter";
import Loader from "../shared/ui/Loader";
import GenreCarousel from "./GenreCarousel";
import RangeSlider from "./RangeSlider";
import ResetBtn from "./ResetBtn";
import { useCallback } from "react";

function FilterControls() {
  const { data, error, isPending } = useGenres({
    page: "1",
    with_genres: "",
    "primary_release_date.gte": "",
    "primary_release_date.lte": "",
    "vote_average.gte": "",
    "vote_average.lte": "",
    include_adult: false,
  });

  const { state, dispatch } = useFilter();

  const handleYearChange = useCallback(
    (values: { min: number; max: number }) => {
      dispatch({
        actionType: SET_FILTER,
        key: "primary_release_date.gte",
        value: `${values.min}-01-01`,
      });
      dispatch({
        actionType: SET_FILTER,
        key: "primary_release_date.lte",
        value: `${values.max}-12-31`,
      });
    },
    [dispatch]
  );

  const handleRatingChange = useCallback(
    (values: { min: number; max: number }) => {
      dispatch({
        actionType: SET_FILTER,
        key: "vote_average.gte",
        value: values.min.toString(),
      });
      dispatch({
        actionType: SET_FILTER,
        key: "vote_average.lte",
        value: values.max.toString(),
      });
    },
    [dispatch]
  );

  const toggleGenreSelection = useCallback(
    (id: number) => {
      const currentGenres = state.with_genres.length
        ? state.with_genres.split(",")
        : [];

      const updatedGenres = currentGenres.includes(id.toString())
        ? currentGenres.filter((genreId) => genreId !== id.toString())
        : [...currentGenres, id.toString()];

      dispatch({
        actionType: SET_FILTER,
        key: "with_genres",
        value: updatedGenres.join(","),
      });
    },
    [state.with_genres, dispatch]
  );

  if (isPending)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loader size={40} aria-label="Loading genres" />
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        <p role="alert" className="text-red-600">
          Failed to load genres. Please try again later.
        </p>
      </div>
    );

  return (
    <section
      className="bg-primary dark:bg-secondary px-4"
      aria-labelledby="filter-controls-heading"
    >
      <h1 id="filter-controls-heading" className="sr-only">
        Filter Controls
      </h1>
      <GenreCarousel
        data={data.genres}
        toggleGenreSelection={toggleGenreSelection}
        state={state}
      />
      <div className="flex justify-around flex-wrap gap-4 p-2">
        <div className="year w-full flex-1 text-secondary dark:text-primary py-4 flex items-center justify-center flex-col">
          <RangeSlider
            min={1888}
            max={new Date().getFullYear()}
            onChange={handleYearChange}
            label="Year"
          />
        </div>
        <div className="rating w-full flex-1 text-secondary dark:text-primary py-4 flex items-center justify-center flex-col">
          <RangeSlider
            min={0}
            max={10}
            onChange={handleRatingChange}
            label="Rating"
          />
        </div>
      </div>
      <div
        onClick={() =>
          dispatch({ actionType: RESET_FILTERS, key: "", value: "" })
        }
        className="w-full flex justify-end p-4"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            dispatch({ actionType: RESET_FILTERS, key: "", value: "" });
          }
        }}
      >
        <ResetBtn name="Reset" />
      </div>
    </section>
  );
}

export default FilterControls;
