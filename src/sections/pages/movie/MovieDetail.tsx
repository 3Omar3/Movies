// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Iconify from '@/components/utils/Iconify';
import RatingCircle from '@/components/elements/RatingCircle';
import * as actionsCredits from '../../../redux/movie/credits/actions';

interface Movie {
    [key: string]: any;
}

const separator = ' ° ';

const MovieDetail: React.FC<{ movie: Movie }> = ({ movie }) => {
    // hooks
    const dispatch = useDispatch();

    // variables
    const { backdrop_path, poster_path, title, release_date, certification, runtime, genres, overview, tagline, vote_average, id } = movie;
    const formattedReleaseDate = new Date(release_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', });
    const formattedRuntime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
    const formattedGenres = genres ? genres.map((g: any) => g.name).join(', ') : '';

    // redux
    const creditsSelector = useSelector((state: any) => state.movie.credits);
    const { credits, loading, error } = creditsSelector;

    useEffect(() => {
        if (id)
            dispatch(actionsCredits.fetchMovieCreditsRequest(id));
    }, [dispatch, id]);

    return (
        <section>
            <div
                className="relative md:h-screen custom-shadow bg-center md:bg-right-top bg-cover bg-blend-overlay md:bg-fixed"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-300 mix-blend-multiply"></div>
                <div className="px-4 mx-auto max-w-screen-xl text-left py-10 md:py-36 lg:py-64 relative z-10">
                    <div className="flex flex-col md:flex-row items-center mb-4 ">
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} className="w-2/3 sm:max-w-sm md:w-80 h-auto rounded-2xl shadow-md md:mr-8" />
                        <div className='space-y-7 mt-8 md:mt-0 text-center md:text-left'>
                            <div>
                                <h1 className="text-4xl font-bold text-white">{title}</h1>
                                <div className='text-gray-200 flex flex-row space-x-2 mt-5 md:mt-0 justify-center md:justify-start'>
                                    <p>{formattedReleaseDate}</p>
                                    <p>{separator}{formattedGenres}</p>
                                    <p>{separator}{formattedRuntime}</p>
                                </div>
                            </div>

                            <div className='flex flex-row space-x-4 items-center justify-center md:justify-start'>
                                <RatingCircle rating={vote_average} styleContainer="h-14 w-14" styleText='text-xl' />

                                <button className='bg-gray-900 shadow rounded-full p-3 w-12 h-12 hover:scale-110 transition-all'>
                                    <Iconify icon={'clarity:add-text-line'} style={{ width: '1.4rem', height: '1.4rem', color: 'white' }} />
                                </button>
                                <button className='bg-gray-900 shadow rounded-full p-3 w-12 h-12 hover:scale-110 transition-all'>
                                    <Iconify icon={'ph:heart-duotone'} style={{ width: '1.4rem', height: '1.4rem', color: 'white' }} />
                                </button>
                                <button className='bg-gray-900 shadow rounded-full p-3 w-12 h-12 hover:scale-110 transition-all'>
                                    <Iconify icon={'iconamoon:bookmark-duotone'} style={{ width: '1.4rem', height: '1.4rem', color: 'white' }} />
                                </button>
                                <button className='bg-gray-900 shadow rounded-full p-3 w-12 h-12 hover:scale-110 transition-all'>
                                    <Iconify icon={'ph:star-duotone'} style={{ width: '1.4rem', height: '1.4rem', color: 'white' }} />
                                </button>
                            </div>

                            <div>
                                <p className='text-gray-300 font-light italic'>{tagline}</p>
                            </div>

                            <div className='m-auto'>
                                <p className='text-white text-xl mb-1'>Overview</p>
                                <p className="text-gray-200 max-w-3xl">{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <div>Loading credits...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div className='my-10 justify-center max-w-4xl m-auto'>
                    <MovieCredits credits={credits} />
                </div>
            )}

        </section>
    );
};

interface Credits {
    [key: string]: any;
}

const MovieCredits: React.FC<{ credits: Credits }> = ({ credits }) => {
    if (!credits || !credits.cast)
        return null;

    return (
        <div>
            <h2 className="text-xl mx-auto font-bold mb-8 shadow bg-gray-200 w-fit px-4 py-1 text-gray-800 rounded-md">
                Movie Credits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 md:mt-0 mx-5">
                {credits.cast.map((person: any) => (
                    <div key={person.id} className="flex items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                            <img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} alt={person.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium">{person.name}</h3>
                            <p className="text-gray-500 text-base">{person.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieDetail;
