import axios from 'axios'

// axios 配置
axios.defaults.timeout = 60000;


axios.defaults.baseURL = '/proxy/';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;charset=UTF-8';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// Add a request interceptor  请求拦截器
axios.interceptors.request.use(config => {
	let data= config.data
	let contentType= config.headers['Content-Type']
	if(contentType.indexOf('application/x-www-form-urlencoded')>=0){
		let form = new FormData();
		for(let key in data){
			form.append(key, JSON.stringify(data[key]));
		}
		config.data= form
	}
    return config
  },
  error => {
    return Promise.reject(error);
});

// Add a response interceptor 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error)
  });


export default axios;
