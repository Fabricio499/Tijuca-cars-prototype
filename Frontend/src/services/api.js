import axios from "axios";

const Api = axios.create({
    baseURL: 'http://192.168.10.147:4400/'
});

Api.interceptors.request.use(async(config)=>{
    const token = localStorage.getItem('Token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})
export default Api;
