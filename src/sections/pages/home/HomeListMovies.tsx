import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '@/components/elements/MovieList';
import * as actionsPopularMovies from '../../../redux/movies/popular/actions';
import * as actionsTrendingMovies from '../../../redux/movies/trending/actions';
import * as actionsTopRatedMovies from '../../../redux/movies/topRated/actions';

const HomeHeader: React.FC = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('popular');

    const moviesSelector = useSelector((state: any) => {
        switch (filter) {
            case 'popular':
                return state.movies.popular;

            case 'trending':
                return state.movies.trending;

            case 'topRated':
                return state.movies.topRated;

            default:
                return state.movies.popular;
        }
    });

    const { movies, loading, error, initialized } = moviesSelector;

    useEffect(() => {
        if (!initialized) {
            switch (filter) {
                case 'popular':
                    dispatch(actionsPopularMovies.fetchPopularMoviesRequest());
                    break;

                case 'trending':
                    dispatch(actionsTrendingMovies.fetchTrendingMoviesRequest('week'));
                    break;

                case 'topRated':
                    dispatch(actionsTopRatedMovies.fetchTopRatedMoviesRequest());
                    break;

                default:
                    dispatch(actionsPopularMovies.fetchPopularMoviesRequest());
                    break;
            }
        }
    }, [dispatch, filter, initialized]);

    const handleFilterChange = (selectedFilter: string) => {
        setFilter(selectedFilter);
    };

    return (
        <section className="my-10">
            <aside className='flex justify-center space-x-3 mx-auto mb-5 md:space-x-6'>
                <button
                    className={`text-sm sm:text-xl  px-3 py-1 rounded-md ${filter === 'popular' ? 'bg-primary-color text-white' : 'bg-gray-100'}`}
                    onClick={() => handleFilterChange('popular')}
                >
                    Popular
                </button>
                <button
                    className={`text-sm sm:text-xl  px-3 py-1 rounded-md ${filter === 'trending' ? 'bg-primary-color text-white' : 'bg-gray-100'}`}
                    onClick={() => handleFilterChange('trending')}
                >
                    Trending
                </button>
                <button
                    className={`text-sm sm:text-xl px-3 py-1 rounded-md ${filter === 'topRated' ? 'bg-primary-color text-white' : 'bg-gray-100'}`}
                    onClick={() => handleFilterChange('topRated')}
                >
                    Top Rated
                </button>
            </aside>

            <div className="max-w-6xl mx-auto">
                <MovieList movies={movies} loading={loading} error={error} />
            </div>
        </section>
    );
};

export default HomeHeader;
