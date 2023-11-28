import axios from 'axios';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
export default axios.create({
    baseURL: 'https://66c3-121-200-50-94.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});