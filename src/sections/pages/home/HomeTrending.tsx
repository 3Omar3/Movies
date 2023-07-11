// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// carousel
import Slider from 'react-slick';
// components
import MovieCard from '../../../components/elements/MovieCard';
// actions
import * as actionsTrending from '../../../redux/movies/trending/actions';

interface Movie {
    id: number;
    title: string;
    poster: string;
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const TrendingMoviesCarousel: React.FC = () => {
    // hooks
    const dispatch = useDispatch();
    const { data: trendingMovies, initialize } = useSelector((state: any) => state.movies.movies.trending);

    // states
    const [trending, setTrending] = useState('week');

    useEffect(() => {
        if (!initialize)
            dispatch(actionsTrending.fetchTrendingMoviesRequest('week'));
    }, [dispatch, initialize]);

    return (
        <section className='my-10 mx-auto max-w-screen-xl'>
            <div className='xs:flex-col lg:flex align-middle'>
                <h3 className="text-2xl tracking-tight leading-none px-5 md:text-5xl lg:text-2xl">
                    Trending
                </h3>

                <div className="w-fit ml-3 shadow rounded-full h-10 flex p-1 relative items-center">
                    <div className="w-36 flex justify-center">
                        <button>Today</button>
                    </div>
                    <div className="w-24 flex justify-center pr-2">
                        <button>This Week</button>
                    </div>
                    <div className='bg-primary-color rounded-full flex justify-center  absolute left-1'>
                        <span className="bg-gradient-to-r from-primary2-start to-primary2-end text-transparent font-semibold bg-clip-text flex items-center justify-center w-32 h-8 ">
                            Seleccionado
                        </span>
                    </div>
                </div>

               <div className="w-fit ml-3 shadow rounded-full h-10 flex p-1 relative items-center">
                    <button className="px-4 py-2 bg-white rounded-full h-10 focus:outline-none">Tab 1</button>
                    <button className="px-4 py-2 bg-white rounded-full h-10 focus:outline-none">Tab 2</button>
                    <button className="px-4 py-2 bg-white rounded-full h-10 focus:outline-none">Tab 3</button>
                </div>
            </div>

            <div className='mt-8'>
                <Slider {...settings}>
                    {trendingMovies.map((movie : any) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TrendingMoviesCarousel;
