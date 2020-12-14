import axios from 'axios';
import configData from '../config.json'

const api = axios.create({
    baseURL: configData.Images.ServerUrl,
    responseType: 'blob',
    timeout: 5000
  });


const responseBody = (response) => response.data;

const request = {
    get: async (url) => api.get(url).then(responseBody)
}

export default request;