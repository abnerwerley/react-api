import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        AccessControlAllowOrigin: true,
    },
});

export default api;