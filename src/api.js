import axios from "axios"
import config from './configs/app-config.json';

const headers = {
    'Content-type': 'application/json'
}

const auth = {
    username: 'vaccineApi',
    password: '494bc225cdd9384f9295b50210eeebcb'
}

const api = axios.create({
    headers,
    auth,
    baseURL: config.API_URL
});

export default api;