import React from "react";
import MovieImg from "../../assets/movies/movie-img.jpg";

function Carousel() {
  return (
    <div className="w-[100vw] h-[50vh] overflow-hidden">
      <img
        className="w-full h-full object-cover object-bottom"
        src={MovieImg}
        alt="Movies page image"
      />
    </div>
  );
}

export default Carousel;
