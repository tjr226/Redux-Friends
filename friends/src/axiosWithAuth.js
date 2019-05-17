import Axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('userToken');

    return Axios.create({
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: token
        },
    });
};