import axios from "axios"

const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = '43a588ef9c8745f327742beff609f743'

const basicFecth = async (endpoint) => {
    const requisicao = await axios.get(`${API_BASE}${endpoint}language=pt-BR&api_key=${API_KEY}`)
    return requisicao
}

export default basicFecth