import axios from "axios"

const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = '43a588ef9c8745f327742beff609f743'

const basicFecth = async (endpoint) => {
    const requisicao = await axios
        .get(`${API_BASE}${endpoint}language=pt-BR&api_key=${API_KEY}`)
        .catch(function (error) {
            console.log(error);
    })
    return requisicao
}

const fooFecth = async (slug) => {
    const endpoint = getUrl(slug);
    const item = basicFecth(endpoint).then(resposta => {
        setItems(resposta.data)
    })
    return item
}

const getUrl = function(slug) {
    const lista = ['originals', titulo: 'Originais Netflix', `/discover/tv?with_network=213`]
    return lista[slug];
}

export default basicFecth
