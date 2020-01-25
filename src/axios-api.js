import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://example-3-c785a.firebaseio.com/'
});


export default axiosApi;