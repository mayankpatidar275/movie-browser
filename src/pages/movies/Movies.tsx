import React from "react";
import MoviesList from "../../components/moviesPage/MoviesList";
import Carousel from "../../components/moviesPage/Carousel";
import Search from "../../components/moviesPage/Search";
import FiltersConfig from "../../components/moviesPage/FilterControls";

function Movies() {
  return (
    <div>
      <section>
        <Carousel />
        <Search />
      </section>
      <section>
        <FiltersConfig />
      </section>
      <MoviesList />
    </div>
  );
}

export default Movies;
