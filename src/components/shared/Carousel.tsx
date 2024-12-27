import MovieImg from "../../assets/movies/movie-img.webp";

function Carousel() {
  return (
    <div
      className="w-full h-[50vh] overflow-hidden"
      role="region"
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading" className="sr-only">
        Main Hero Image
      </h2>
      <figure>
        <img
          className="w-full h-full object-cover object-bottom"
          src={MovieImg}
          alt="A visually captivating poster"
          // loading="lazy"
        />
        <figcaption className="sr-only">
          A scenic poster representing the theme of the website.
        </figcaption>
      </figure>
    </div>
  );
}

export default Carousel;
