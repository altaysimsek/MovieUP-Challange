import { Carousel } from 'react-bootstrap';
import PopularMovieCard from './PopularMovieCard';

export default function CarouselMovie({ movies }) {
  return (
    <>
      <Carousel>
        {movies.map((movies, index) => (
          <Carousel.Item key={index} interval={3500}>
            <div className="d-flex my-5 justify-content-center">
              <PopularMovieCard
                key={movies.id}
                details={movies}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
CarouselMovie.defaultProps = {
  movies: [],

};
