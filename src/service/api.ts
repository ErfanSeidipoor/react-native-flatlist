import axios from "axios";

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 20000,
})

api.interceptors.request.use(
    config => {
        config.headers = { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
)

api.interceptors.response.use(
    response => {
        return response
    },
    async error =>{
        return Promise.reject(error.response.data)
})