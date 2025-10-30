import axios from "axios";

const httpClient = axios.create({
    url: 'http://localhost',
    timeout: 5000
})

httpClient.interceptors.request.use((config)=>{
    //请求前置处理
    //todo 注入token
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

export { httpClient }