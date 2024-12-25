import React, { useEffect } from "react";
import MoviesList from "../../components/moviesPage/MoviesList";
import Carousel from "../../components/moviesPage/Carousel";
import Search from "../../components/moviesPage/Search";
import FiltersConfig from "../../components/moviesPage/FilterControls";
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
