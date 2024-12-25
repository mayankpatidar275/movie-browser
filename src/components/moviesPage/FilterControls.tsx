import { useEffect, useState } from "react";
import { useGenres } from "../../custom-hooks/queries";
import GenreBtn from "./GenreBtn";
import RangeSlider from "./RangeSlider";
import ResetBtn from "./ResetBtn";
import { useFilter } from "../../custom-hooks/useFilter";
import { SET_FILTER } from "../../constants/actions";
import Loader from "../shared/ui/Loader";

function FilterControls() {
  const { data, error, isPending } = useGenres({});

  const { state, dispatch } = useFilter();

  const handleYearChange = (values) => {
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
  };
  useEffect(() => {
    console.log("s: ", state);
  }, [state]);

  const handleRatingChange = (values) => {
    dispatch({
      actionType: SET_FILTER,
      key: "vote_average.gte",
      value: values.min,
    });
    dispatch({
      actionType: SET_FILTER,
      key: "vote_average.lte",
      value: values.max,
    });
  };

  if (isPending)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loader size={40} />
      </div>
    );
  if (error) return <div className="h-screen">Something went wrong</div>;

  return (
    <div className="bg-primary dark:bg-secondary px-4">
      <div className="w-full flex justify-center flex-wrap gap-2 p-4">
        {data.genres.map((item, index) => {
          return (
            <div
              onClick={(e) => {
                e.preventDefault();

                // Note: I want movies which has both the selected genres (AND). Use | for OR.
                const currentGenres = state.with_genres.length
                  ? state.with_genres.split(",")
                  : [];
                console.log("curr: ", currentGenres);

                // if already selected
                if (currentGenres.includes(item.id.toString())) {
                  const newGenres = currentGenres.filter(
                    (i) => i != item.id.toString()
                  );
                  dispatch({
                    actionType: SET_FILTER,
                    key: "with_genres",
                    value: newGenres.join(","),
                  });
                } else {
                  currentGenres.push(item.id.toString());
                  // remove "," at start
                  dispatch({
                    actionType: SET_FILTER,
                    key: "with_genres",
                    value: currentGenres.join(","),
                  });
                }
              }}
              key={item.id}
            >
              <GenreBtn
                item={item}
                isSelected={state.with_genres.includes(item.id.toString())}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-around flex-wrap gap-4 p-2">
        <div className="year w-full flex-1 text-secondary dark:text-primary py-4 flex items-center justify-center flex-col">
          <RangeSlider
            min={1888}
            max={new Date().getFullYear()}
            onChange={handleYearChange}
            label="Year"
          />
        </div>
        <div className="rating  w-full flex-1 text-secondary dark:text-primary py-4 flex items-center justify-center flex-col">
          <RangeSlider
            min={0}
            max={10}
            onChange={handleRatingChange}
            label="Rating"
          />
        </div>
      </div>
      <div className="w-full flex justify-end p-4">
        <ResetBtn name="Reset" />
      </div>
    </div>
  );
}

export default FilterControls;
