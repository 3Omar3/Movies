import React from 'react';
import Link from 'next/link';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  poster: string;
}

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const MovieList: React.FC<MovieListProps> = ({ movies, loading, error }) => {
  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>Error: {error}</div>;

  if (movies.length === 0)
    return <div>No movies found.</div>;

  return (
    <div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {movies.map((movie: any) => (
          <Link href={`/movie/${movie.id}`} key={movie.id} className='hover:scale-110 transition-all cursor-pointer '>
              <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
