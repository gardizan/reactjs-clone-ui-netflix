const API_KEY = '43a588ef9c8745f327742beff609f743'
const API_BASE = 'https://api.themoviedb.org/3'


const basicFecth = async (endpoint) => {
    const requisicao = await fetch(`${API_BASE}${endpoint}`)
    const json = await requisicao.json()
    return json
}


export default {

    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                titulo: 'Originais Netflix',
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                titulo: 'Recomendados para Você',
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                titulo: 'Em Alta',
                items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                titulo: 'Ação',
                items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                titulo: 'Comédia',
                items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                titulo: 'Terror',
                items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                titulo: 'Romance',
                items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                titulo: 'Documentários',
                items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getInfoFilme: async(filmeId, tipo) => {
        let info = {}
        if(filmeId) {
            switch(tipo) {
                case 'movie':
                    info = await basicFecth(`/movie/${filmeId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await basicFecth(`/tv/${filmeId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null 
                break
            }
        }
        return info
    }
}