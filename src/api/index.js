import Axios from 'axios'

const request = Axios.create({
    baseURL: '/api',
    timeout: 30000
})

request.defaults.headers['Content-Type'] = 'application/json';
request.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.response.status === 403) {
       console.log("登录过期！");
    } else {
       console.log("请求错误！");
    }
    return Promise.reject(error);
});

export default request
