import MovieImg from "../../assets/movies/movie-img.webp";
// import MovieImgAvif from "../../assets/movies/movie-img.avif";
import MovieImgJPG from "../../assets/movies/movie-img.jpg";

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
        <picture>
          {/* WebP source for modern browsers */}
          <source srcSet={MovieImg} type="image/webp" />
          {/* Fallback image */}
          <img
            src={MovieImgJPG}
            alt="A visually captivating poster"
            className="w-full h-full object-cover object-bottom"
            // loading="lazy"
          />
        </picture>
        <figcaption className="sr-only">
          A scenic poster representing the theme of the website.
        </figcaption>
      </figure>
    </div>
  );
}

export default Carousel;
