import React from 'react';
import RatingCircle from './RatingCircle';

interface Movie {
  id: number;
  title: string;
  rating: number,
  poster_path: string;
  release_date: string;
  vote_average: number,
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { poster_path, title, release_date, vote_average } = movie;
  const formattedReleaseDate = (new Date(release_date)).toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="p-4 relative">
      <div className='block'>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={movie.title} className="w-full h-auto mb-2 rounded-2xl shadow-md" />
        <div className="absolute top-0 -left-2">
          <RatingCircle rating={vote_average} />
        </div>
      </div>
      <h2 className="text-md font-semibold line-clamp-2">{title}</h2>
      <p className="text-sm text-gray-500">{formattedReleaseDate}</p>
    </div>
  );
};

export default MovieCard;
