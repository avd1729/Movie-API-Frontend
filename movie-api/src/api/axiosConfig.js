import axios from 'axios';

export default axios.create({
    baseURL: 'https://ef4d-121-200-50-94.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});