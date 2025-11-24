import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000
})

httpClient.interceptors.request.use((config)=>{
    //请求前置处理
    //todo 注入token
    config.headers.Authorization = `Bearer 1111111111`
    config.headers.uid = 2
    return config
},(error)=>{
    return Promise.reject(error)
})


httpClient.interceptors.response.use((response)=>{
    //响应成功处理
    return response.data
}, (error)=>{
    //响应失败处理
    return Promise.reject(error)
})

export default httpClient