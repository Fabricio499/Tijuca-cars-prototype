import axios from "axios";

const Api = axios.create({
    baseURL: 'http://192.168.10.147:5000/'
});

Api.interceptors.request.use(async(config)=>{
    try {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    } catch(err) {
        console.log(err)
    }
})
export default Api;
