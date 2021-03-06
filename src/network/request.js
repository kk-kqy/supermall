import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
      baseURL:'',
      timeout: 5000
    })
    //2.1请求过滤器(拦截器)
    instance.interceptors.request.use(config => {
      return config
    },err => {
      console.log(err)
    })
    //2.2响应过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    },err => {
      console.log(err)
    })
    //3.发送真正的网络请求
    return instance(config)
}
