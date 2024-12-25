import Carousel from "../../components/moviesPage/Carousel";
import FiltersConfig from "../../components/moviesPage/FilterControls";
import MoviesList from "../../components/moviesPage/MoviesList";
import Search from "../../components/moviesPage/Search";
import FilterProvider from "../../context/FilterContext/FilterProvider";

function Movies() {
  return (
    <FilterProvider>
      <div>
        <Carousel />
        <Search />
        <FiltersConfig />
        <MoviesList />
      </div>
    </FilterProvider>
  );
}

export default Movies;
