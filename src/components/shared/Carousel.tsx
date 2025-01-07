import MovieImg from "../../assets/movies/movie-img.webp";
// import MovieImgAvif from "../../assets/movies/movie-img.avif";
import MovieImgJPG from "../../assets/movies/movie-img.jpg";

function Carousel() {
  return (
    <section
      className="w-full h-[50vh] overflow-hidden"
      role="region" // significant for author
      aria-labelledby="carousel-heading" // to refer an element
    >
      {/* sr-only : a utility class that allows you to hide an element visually on a
      webpage while still making it accessible to screen readers */}
      <h2 id="carousel-heading" className="sr-only">
        Main Hero Image
      </h2>
      <figure className="h-full">
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
    </section>
  );
}

export default Carousel;
