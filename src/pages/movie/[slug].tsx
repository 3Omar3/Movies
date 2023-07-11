// react
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// next
import { useRouter } from 'next/router';
// components
import MovieDetail from '../../sections/pages/movie/MovieDetail';
// actions
import * as actionMovie from '../../redux/movie/detail/actions';

function MovieDetailsPage() {
  // hooks
  const router = useRouter();
  const dispatch = useDispatch();

  const { slug } = router.query;
  const { movie, loading, error } = useSelector((state: any) => state.movie.detail);

  useEffect(() => {
    if (slug) {
      const movieSlug = Array.isArray(slug) ? slug[0].toString() : slug.toString();
      dispatch(actionMovie.fetchMovieDetailsRequest(movieSlug));
    }
  }, [dispatch, slug]);

  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>Error: {error}</div>;

  return (
    <main>
      <MovieDetail movie={movie}/>
    </main>
  );
}

export default MovieDetailsPage;
