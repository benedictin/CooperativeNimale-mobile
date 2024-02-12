import axios from 'axios'

const unauthorizedCode = [401]
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const BaseService = axios.create({
    timeout: 60000,
    baseURL: 'https://sandbox.kimia.pro/api',
    headers
})

BaseService.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

BaseService.interceptors.response.use(
    (response) => response,
    (error) => {
        const {response} = error

        if (response && unauthorizedCode.includes(response.status)) {
		console.log(response)
        }

        return Promise.reject(error)
    }
)

export default BaseService