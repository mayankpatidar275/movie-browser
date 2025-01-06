import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import FiltersConfig from "../../components/moviesPage/FilterControls";
import MoviesList from "../../components/moviesPage/MoviesList";
import Search from "../../components/moviesPage/Search";
import Carousel from "../../components/shared/Carousel";
import FilterProvider from "../../context/FilterContext/FilterProvider";

function Movies() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FilterProvider>
      <div>
        <Carousel />
        <Search />
        <FiltersConfig />
        <MoviesList />

        {/* Scroll-to-top Button */}
        {showScrollButton && (
          <div
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-4 right-4 p-4 rounded-full bg-secondary text-primary dark:bg-primary dark:text-secondary cursor-pointer shadow-lg transition-transform hover:scale-110"
          >
            <ArrowUp size={24} />
          </div>
        )}
      </div>
    </FilterProvider>
  );
}

export default Movies;
