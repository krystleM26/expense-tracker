import axios from 'axios';

const BASE_URL= "http://localhost:4000";

export const publicRequest = axios.create({
    baseURL: BASE_URL,

})