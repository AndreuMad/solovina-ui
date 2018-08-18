import axios from 'axios';

// Set up default Axios headers
axios.defaults.headers.common['X-Requested-By'] = 'ctrl';
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.headers.common['If-Modified-Since'] = '0';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// configure profile Axios instance
const profileAxiosInstance = axios.create();

profileAxiosInstance.defaults.baseURL = process.env.REACT_APP_PROFILE_API_URL;
profileAxiosInstance.interceptors.response.use(response => {
  return response.data;
}, response => Promise.reject(response));

profileAxiosInstance.interceptors.request.use(config => {
  const authToken = localStorage.getItem('ctrlAuthJwt');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

export const profileApi = profileAxiosInstance;

// configure base Axios instance
const baseAxiosInstance = axios.create();
baseAxiosInstance.defaults.baseUrl = process.env.REACT_APP_BASE_API_URL;
baseAxiosInstance.interceptors.response.use(response => {
  return response.data;
}, response => Promise.reject(response));

baseAxiosInstance.interceptors.request.use(config => {
  const authToken = localStorage.getItem('ctrlAuthJwt');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

export const baseApi = baseAxiosInstance;
