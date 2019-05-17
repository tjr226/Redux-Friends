import Axios from 'axios';

export default function() {
    const token = localStorage.getItem('userToken');

    return Axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        baseURL: 'http://localhost:5000'
    });
};