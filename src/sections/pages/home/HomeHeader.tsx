// react
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// actions
import * as actionsResources from '../../../redux/resources/headerImage/actions';

const HomeHeader: React.FC = () => {
    // hooks
    const dispatch = useDispatch();
    const { imageUrl, loading, error } = useSelector((state: any) => state.resources.headerImage);

    useEffect(() => {
        dispatch(actionsResources.fetchRandomMovieImageRequest());
    }, [dispatch]);

    return (
        <section
            className="relative custom-shadow bg-center bg-cover"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-l from-gray-300 to-gray-900  mix-blend-multiply"></div>
            <div className="px-4 mx-auto max-w-screen-xl text-left py-28 lg:py-50 relative z-10">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white px-5 md:text-5xl lg:text-6xl lg:px-4">
                    Welcome
                </h1>
                <p className="mb-8 text-xl font-normal text-left text-gray-300 px-5 lg:text-3xl lg:px-4">
                    Millions of movies, TV shows and people to discover. Explore now.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <div className="mt-5 flex w-[97%] rounded-full bg-opacity-0 backdrop-blur shadow">
                        <input
                            type="search"
                            className="w-full border-none bg-transparent bg-opacity-0 px-4 py-1 font-light placeholder:text-white focus:outline-none"
                            placeholder="Search for a movie, tv show, person..."
                        />
                        <button className="m-2 shadow rounded-full custom-text-shadow bg-gradient-to-r from-primary-start to-primary-end px-4 lg:px-7 py-2 hover:scale-105 transition-transform text-white">
                            search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;