import MovieImg from "../../assets/movies/movie-img.webp";

function Carousel() {
  return (
    <div
      className="w-full h-[50vh] overflow-hidden"
      role="region"
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading" className="sr-only">
        Featured Movie Image
      </h2>
      <figure>
        <img
          className="w-full h-full object-cover object-bottom"
          src={MovieImg}
          alt="A visually captivating poster of the latest movies in the collection"
          // loading="lazy"
        />
        <figcaption className="sr-only">
          A scenic poster representing the theme of the movies available.
        </figcaption>
      </figure>
    </div>
  );
}

export default Carousel;
