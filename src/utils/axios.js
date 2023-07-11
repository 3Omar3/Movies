import axios from 'axios';

// variables
const apiKey = '4f298a53e552283bee957836a529baec';
const baseUrl = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
  timeout: 7000,
  headers: { 
    accept: 'application/json',
    'Content-Type': 'application/json',
   },
});

export async function AxiosCall(url) {
  return axiosInstance.get(url);
}

export async function AxiosPost(url, data) {
  return axiosInstance.post(url, data);
}

export async function AxiosFile(url, data) {
  return axiosInstance.post(url, data);
}

// Add a request interceptor to append the API key to each request
axiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = apiKey;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
