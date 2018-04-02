import axios from 'axios';

const API = axios.create({
    baseURL: 'https://hidden-crag-71735.herokuapp.com/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export default API;