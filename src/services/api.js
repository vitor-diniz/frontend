import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-vitor.herokuapp.com'
});

export default api;
