import React from "react";
import MovieImg from "../../assets/movies/movies-image.jpg";

function Carousel() {
  return (
    <div>
      <picture>
        <img src={MovieImg} alt="" />
      </picture>
    </div>
  );
}

export default Carousel;
