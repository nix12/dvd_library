import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com'
});

instance.interceptors.request.use(request => {
    request.headers['access-token'] = localStorage.getItem('access-token');
    request.headers['token-type'] = localStorage.getItem('token-type');
    request.headers['client'] = localStorage.getItem('client');
    request.headers['expiry'] = localStorage.getItem('expiry');
    request.headers['uid'] = localStorage.getItem('uid');
    return request;
}, error => {
    Promise.reject(error);
});

export default instance;
