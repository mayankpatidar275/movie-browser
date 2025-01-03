import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
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
    console.log("vall: ", sliderRef.current?.scrollLeft);
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollBy + carouselWidth;
    }
  }

  return (
    <div className="genre-carousel overflow-hidden relative flex justify-center items-center">
      <button
        onClick={handlePrev}
        className="pre-btn dark:text-primary text-secondary text-xl"
      >
        <ChevronLeft />
      </button>
      <div
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
        className="pre-btn dark:text-primary text-secondary"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default GenreCarousel;
