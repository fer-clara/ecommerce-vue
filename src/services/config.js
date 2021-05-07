import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://corebiz-test.herokuapp.com/api/v1/'
})