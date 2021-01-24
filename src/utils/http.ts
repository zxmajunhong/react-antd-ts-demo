import axios from 'axios';

const env = process.env.NODE_ENV;

const instance = axios.create({
  baseURL: env === 'development' ? '开发地址' : '线上地址',
});

export default instance;
