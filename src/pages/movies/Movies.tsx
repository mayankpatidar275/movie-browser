import Carousel from "../../components/shared/Carousel";
import FiltersConfig from "../../components/moviesPage/FilterControls";
import MoviesList from "../../components/moviesPage/MoviesList";
import Search from "../../components/moviesPage/Search";
import FilterProvider from "../../context/FilterContext/FilterProvider";
import { ArrowUp } from "lucide-react";

function Movies() {
  return (
    <FilterProvider>
      <div>
        <Carousel />
        <Search />
        <FiltersConfig />
        <MoviesList />
        <div className="dark:bg-primary bg-secondary text-primary dark:text-secondary p-4 m-4 bottom-0 right-0 rounded-full fixed cursor-pointer">
          <ArrowUp />
        </div>
      </div>
    </FilterProvider>
  );
}

export default Movies;
