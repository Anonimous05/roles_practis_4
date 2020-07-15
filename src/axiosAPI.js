import axios from 'axios';

const axiosAPI = axios.create({
   baseURL:'https://kgvirus-c921d.firebaseio.com/'
});

export default axiosAPI;