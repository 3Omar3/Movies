// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_MOVIES = '/movies';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    register: path(ROOTS_AUTH, '/register'),
};

export const PATH_PAGE = {
    root: "/",
    page403: '/403',
    page404: '/404',
    page500: '/500',
    movies: {
        root: ROOTS_MOVIES,
        view: (slug) => path(ROOTS_MOVIES, `/movies/${slug}`),
    },
};