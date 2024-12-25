import { useState } from "react";
import { useGenres } from "../../custom-hooks/queries";
import GenreBtn from "./GenreBtn";
import RangeSlider from "./RangeSlider";
import ResetBtn from "./ResetBtn";

function FilterControls() {
  const { data, error, isPending } = useGenres({});
  console.log("gen: ", data);
  // const [totalPages, setTotalPages] = useState(3);
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  if (isPending) return <div>Pending...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="bg-primary dark:bg-secondary px-4">
      <div className="w-full flex justify-center flex-wrap gap-2 p-4">
        {/* <div className="text-primary mr-auto">Prev</div> */}
        {data.genres.map((item, index) => {
          return <GenreBtn key={item.id} item={item} />;
        })}
        {/* <div className="text-primary ml-auto">Next</div> */}
      </div>
      <div className="flex justify-around flex-wrap gap-4 p-2">
        <div className="year w-full flex-1 text-secondary dark:text-primary py-4 flex items-center justify-center flex-col">
          <RangeSlider
            min={200}
            max={1000}
            onChange={handleRangeChange}
            label="Year"
          />
        </div>
        <div className="rating  w-full flex-1 text-secondary dark:text-primary py-4 flex items-center justify-center flex-col">
          <RangeSlider
            min={200}
            max={1000}
            onChange={handleRangeChange}
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
