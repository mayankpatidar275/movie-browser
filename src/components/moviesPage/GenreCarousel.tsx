import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { GenreItem, QueryParams } from "../../types";
import GenreBtn from "./GenreBtn";

interface GenreCarouselProps {
  data: { id: number; name: string }[];
  toggleGenreSelection: (id: number) => void;
  state: QueryParams;
}

function GenreCarousel({
  data,
  toggleGenreSelection,
  state,
}: GenreCarouselProps) {
  const [sliderPosition, setSliderPosition] = useState("left");
  const sliderRef = useRef<HTMLDivElement>(null);
  function handlePrev() {
    const carouselWidth = sliderRef?.current?.clientWidth ?? 0;
    const scrollBy = sliderRef?.current?.scrollLeft ?? 0;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollBy - carouselWidth;
    }
  }
  function handleNext() {
    const carouselWidth = sliderRef?.current?.clientWidth ?? 0;
    const scrollBy = sliderRef?.current?.scrollLeft ?? 0;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollBy + carouselWidth;
    }
  }

  function updateSliderPosition() {
    if (sliderRef?.current?.scrollLeft === 0) setSliderPosition("left");
    else setSliderPosition("right");
  }

  return (
    <div className="genre-carousel overflow-hidden relative flex justify-center items-center">
      <button
        onClick={handlePrev}
        className={`pre-btn text-xl ${
          sliderPosition === "left"
            ? "text-gray-500"
            : "dark:text-primary text-secondary "
        }`}
      >
        <ChevronLeft />
      </button>
      <div
        onScroll={updateSliderPosition}
        ref={sliderRef}
        className="w-full flex gap-2 p-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {data.map((item: GenreItem) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              toggleGenreSelection(item.id);
            }}
            key={item.id}
            role="button"
            aria-pressed={state.with_genres.includes(item.id.toString())}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleGenreSelection(item.id);
              }
            }}
            className="my-auto"
          >
            <GenreBtn
              item={item}
              isSelected={state.with_genres.includes(item.id.toString())}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className={`pre-btn text-xl ${
          sliderPosition === "right"
            ? "text-gray-400"
            : "dark:text-primary text-secondary "
        }`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default GenreCarousel;
