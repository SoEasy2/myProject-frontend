import axios from "axios";
import {API_URL} from "./requests/requests";

const $api = axios.create({
    withCredentials:true,
    baseURL:API_URL
});
$api.interceptors.request.use((config)=>{
    if (config.headers){
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    } return null

})
$api.interceptors.response.use((config)=>{
    return config
},async (error)=>{
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true;
        console.log('Pered')
        try{
            console.log('Zashel v in')
            const response = await axios.get(`${API_URL}api/refresh`,{withCredentials:true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('ERROR interceptor')
        }
    } throw error;
})

export default $api;