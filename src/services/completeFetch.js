const completeFetch = () => {
    const lista = {
        originais: '/discover/tv?with_network=213&',
        trending: '/trending/all/week?',
        toprated: '/movie/top_rated?',
        action: '/discover/movie?with_genres=28&',
        comedy: '/discover/movie?with_genres=35&',
        horror: '/discover/movie?with_genres=27&',
        romance: '/discover/movie?with_genres=10749&',
        documentary: '/discover/movie?with_genres=99&'
    }

    return lista
}

export default completeFetch